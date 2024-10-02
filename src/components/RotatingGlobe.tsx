import React, { useEffect, useRef, useState } from "react";
import Globe, { GlobeMethods } from "react-globe.gl";

const AutoRotatingGlobe = () => {
  const globeRef = useRef<GlobeMethods | undefined>();
  const resetTimeoutRef = useRef<NodeJS.Timeout | null>(null); // Define the ref for storing timeout ID
  const [autoRotate, setAutoRotate] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [isMouseInside, setIsMouseInside] = useState(false); // Track mouse presence inside the globe

  const naturalPosition = { lat: 0, altitude: 2.5 }; // Define the "natural" position of the globe

  useEffect(() => {
    const globe = globeRef.current;

    // Enable auto-rotation by adjusting the longitude
    const rotateGlobe = () => {
      if (autoRotate && globe) {
        const pov = globe.pointOfView(); // Get current POV
        globe.pointOfView({ ...pov, lng: pov.lng + 0.3 }); // Rotate along Y-axis (longitude)
      }
    };

    const intervalId = setInterval(rotateGlobe, 50); // Rotate every 70ms

    return () => clearInterval(intervalId); // Clean up the interval on component unmount
  }, [autoRotate]);

  const handleMouseDown = () => {
    setIsDragging(true);
    setAutoRotate(false); // Pause auto-rotation when dragging starts
  };

  const handleMouseUp = () => {
    const globe = globeRef.current;
    setIsDragging(false);

    if (!globe) return;

    // Clear any previous timeout to prevent multiple timeouts from stacking
    if (resetTimeoutRef.current) {
      clearTimeout(resetTimeoutRef.current);
    }

    if (isMouseInside) {
      // Create a new timeout and store its ID in the ref
      resetTimeoutRef.current = setTimeout(() => {
        const { lng } = globe.pointOfView();
        console.log(lng);
        globe.pointOfView({ ...naturalPosition, lng: lng }, 1000); // Transition back to the "natural" position over 1 second

        // Set another timeout to resume auto-rotation after 1.5 seconds
        resetTimeoutRef.current = setTimeout(() => setAutoRotate(true), 500);
      }, 1500);
    }
  };

  const handleMouseEnter = () => {
    setIsMouseInside(true); // Set the flag when mouse enters the globe area
  };

  const handleMouseLeave = () => {
    setIsMouseInside(false); // Reset the flag when mouse leaves the globe area
    if (!isDragging) {
      // If not dragging, don't do anything
      return;
    }
    // If dragging, you can choose to do something, or simply do nothing here.
  };

  return (
    <div
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave} // Track mouse leaving
      onMouseEnter={handleMouseEnter} // Track mouse entering
    >
      <Globe
        ref={globeRef}
        height={326}
        width={326}
        backgroundColor="rgba(0,0,0,0)"
        showAtmosphere
        showGraticules
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
        animateIn={true}
      />
    </div>
  );
};

export default AutoRotatingGlobe;
