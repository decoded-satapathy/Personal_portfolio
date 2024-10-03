import { useState, useEffect } from "react";
import { FaSearchPlus, FaSearchMinus } from "react-icons/fa";

interface ZoomableVideoProps {
  src: string;
}

export default function ZoomableVideo({ src }: ZoomableVideoProps) {
  const [isZoomed, setIsZoomed] = useState(false);

  const handleVideoClick = () => {
    setIsZoomed((prevZoomed) => !prevZoomed);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isZoomed) {
        handleVideoClick();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isZoomed, handleVideoClick]);

  return (
    <>
      {/* Zoom Button - Only shown when video is not zoomed in */}
      {!isZoomed && (
        <div className="absolute top-4 right-4 z-50">
          <button
            onClick={handleVideoClick}
            className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition"
            title="Zoom In"
          >
            <FaSearchPlus className="text-white text-2xl" />
          </button>
        </div>
      )}

      {/* Zoomed Video */}
      <div
        className={`fixed inset-0 z-50 bg-black flex justify-center items-center transition-all ease-in-out duration-500 ${
          isZoomed
            ? "visible opacity-100 bg-opacity-60 backdrop-blur-sm"
            : "invisible opacity-0 bg-opacity-0 backdrop-blur-none "
        }`}
      >
        <div
          className="cursor-zoom-out flex justify-center items-center"
          onClick={handleVideoClick}
        >
          <video
            src={src}
            className={`drop-shadow-xl rounded-xl w-4/5 h-auto transition-all ease-in-out duration-500 ${
              isZoomed ? "opacity-100" : "opacity-0"
            }`}
            autoPlay
            loop
          />
        </div>
        <div className="absolute top-4 right-4">
          <button
            onClick={handleVideoClick}
            className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-all"
            title="Zoom Out"
          >
            <FaSearchMinus className="text-white text-2xl" />
          </button>
        </div>
      </div>
    </>
  );
}
