import React, { useEffect, useState } from 'react';

const ScrollToHero = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const heroSection = document.getElementById('hero');
    const isSmallScreen = window.matchMedia('(max-width: 640px)').matches;

    const thresholdValue = isSmallScreen ? 0.3 : 0;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          setShowButton(true);  // Show button when hero section is not visible
        } else {
          setShowButton(false); // Hide button when hero section is visible
        }
      },
      { threshold: thresholdValue } // Detects as soon as any part of #hero is out of view
    );

    if (heroSection) {
      observer.observe(heroSection);
    }

    return () => {
      if (heroSection) {
        observer.unobserve(heroSection);
      } else {
        console.log("Hero section not found");
        alert("Hero section not found");
      }
    };
  }, []);

  const scrollToHero = () => {
    const heroSection = document.getElementById('hero');
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {showButton && (
        <button
          onClick={scrollToHero}
          className="fixed bottom-[70px] left-[20px]"
        >
          <div className='rounded-full p-3 bg-black-300 arrow-gradient'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="white" className="size-6 text-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
            </svg>
          </div>
        </button>
      )}
    </>
  );
};

export default ScrollToHero;
