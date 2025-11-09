import React from "react";

const VIDEO_URL =
  "https://res.cloudinary.com/dptswux6y/video/upload/v1762059782/1001_ehd3df.mov";
const POSTER_URL =
  "https://res.cloudinary.com/dptswux6y/image/upload/v1747255555/video-fallback.jpg";

export default function Home() {
  return (
    <section
      className="relative w-full h-screen overflow-hidden"
      aria-label="Hero Section"
    >
      {/* ✅ Background Video with Fallback */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src={VIDEO_URL}
        poster={POSTER_URL}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      />

      {/* ✅ Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* ✅ Hero Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)] leading-snug">
          अन्नाद् भवन्ति भूतानि, पर्जन्याद् अन्नसम्भवः। <br />
          यज्ञाद् भवति पर्जन्यो, यज्ञः कर्मसमुद्भवः॥
        </h1>

        <p className="text-lg md:text-xl text-gray-200 font-light mb-8 max-w-2xl">
          All living beings subsist on food; food is produced by rain, rain is
          produced by the performance of sacrifice (selfless work), and sacrifice
          originates from prescribed duties.
        </p>

        <button
          aria-label="Donate Now"
          className="px-7 py-3 rounded-full bg-[#EBA83A] hover:bg-[#D8942E] text-black font-semibold transition-colors duration-200 shadow-md hover:shadow-lg"
        >
          Donate Now
        </button>
      </div>
    </section>
  );
}
