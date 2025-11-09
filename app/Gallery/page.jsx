'use client';
import React, { useState, useEffect, useRef } from 'react';

// Re-using the image links you provided earlier
const images = [
  "https://res.cloudinary.com/dptswux6y/image/upload/v1762065315/P1569466_gmaeln.jpg",
  "https://res.cloudinary.com/dptswux6y/image/upload/v1762065322/P1569474_bhkvty.jpg",
  "https://res.cloudinary.com/dptswux6y/image/upload/v1762065278/P1569192_nlqkcw.jpg",
  "https://res.cloudinary.com/dptswux6y/video/upload/v1762065372/P1450108_zztskv.mp4",
  "https://res.cloudinary.com/dptswux6y/image/upload/v1762065237/IMG_3509_ahwmf2.jpg",
  "https://res.cloudinary.com/dptswux6y/image/upload/v1762065275/IMG_3508_tjgcdr.jpg",
  "https://res.cloudinary.com/dptswux6y/image/upload/v1762059726/P1568789_jyjdpu.jpg",
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1501183007986-d0d080b147f9?q=80&w=2070&auto=format&fit=crop&ixlib-rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const ParallaxScroll = ({ images }) => {
  const gridRef = useRef(null);
  const [translateY, setTranslateY] = useState({ col1: 0, col2: 0, col3: 0 });

  useEffect(() => {
    const handleScroll = () => {
      if (!gridRef.current) return;
      const rect = gridRef.current.getBoundingClientRect();
      
      // Check if the element is in the viewport
      if (rect.bottom >= 0 && rect.top <= window.innerHeight) {
        // A simple progress calculation: 0 when top of element hits bottom of viewport, 1 when bottom of element hits top
        const progress = (rect.top + rect.height) / (window.innerHeight + rect.height);
        const invertedProgress = 1 - progress;

        setTranslateY({
          col1: invertedProgress * -200, // Moves up
          col2: invertedProgress * 200,  // Moves down
          col3: invertedProgress * -150, // Moves up, but slower
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const firstColumn = images.filter((_, i) => i % 3 === 0);
  const secondColumn = images.filter((_, i) => i % 3 === 1);
  const thirdColumn = images.filter((_, i) => i % 3 === 2);

  return (
    <div ref={gridRef} className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 md:p-10">
      <div className="flex flex-col gap-4 transition-transform duration-200 ease-out" style={{ transform: `translateY(${translateY.col1}px)` }}>
        {firstColumn.map((src, index) => (
          <img key={`col1-${index}`} src={src} className="w-full h-auto object-cover rounded-lg shadow-md" alt={`Parallax image ${index}`} />
        ))}
      </div>
      <div className="flex flex-col gap-4 transition-transform duration-200 ease-out" style={{ transform: `translateY(${translateY.col2}px)` }}>
        {secondColumn.map((src, index) => (
          <img key={`col2-${index}`} src={src} className="w-full h-auto object-cover rounded-lg shadow-md" alt={`Parallax image ${index}`} />
        ))}
      </div>
      <div className="flex flex-col gap-4 transition-transform duration-200 ease-out" style={{ transform: `translateY(${translateY.col3}px)` }}>
        {thirdColumn.map((src, index) => (
          <img key={`col3-${index}`} src={src} className="w-full h-auto object-cover rounded-lg shadow-md" alt={`Parallax image ${index}`} />
        ))}
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="bg-white dark:bg-black text-black dark:text-white font-sans">
      <div className="h-screen flex flex-col items-center justify-center text-center p-4">
        <h1 className="text-4xl md:text-6xl font-bold">Hare Krishna</h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">Scroll down to see the images.</p>
        <div className="animate-bounce mt-8">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
        </div>
      </div>

      <ParallaxScroll images={images} />

      <div className="h-screen flex items-center justify-center">
        <h2 className="text-3xl md:text-5xl font-bold text-center">Hare Krishna Hare Krishna Krishna Krishna Hare Hare Hare Rama Hare Rama Rama Rama Hare Hare</h2>
  
      </div>
    </div>
  );
};

export default App;

