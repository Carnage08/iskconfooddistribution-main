"use client";

import React, { useMemo } from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import Image from "next/image";

// ✅ DATA ALWAYS DEFINED BEFORE COMPONENTS
const data = [
  {
    category: "Seva",
    title: "Prasadam Distribution Drive – (Date)",
    src: "",
  },
  {
    category: "Festival Relief",
    title: "Janmashtami Food Relief",
    src: "",
  },
  {
    category: "Daily Service",
    title: "Daily Mid-day Meal Program",
    src: "",
  },
  {
    category: "Spiritual Seva",
    title: "Kumbh Mela Seva",
    src: "",
  },
  {
    category: "Relief Work",
    title: "Flood Relief — Volunteers Needed",
    src: "",
  },
];

const Upcoming = () => {
  // ✅ Memoize card mapping for performance (no re-render on parent updates)
  const cards = useMemo(() => {
    return data.map((item, index) => (
      <Card key={`${item.src}-${index}`} card={item} index={index} />
    ));
  }, []);

  return (
    <section
      id="Upcoming"
      aria-labelledby="upcoming-events"
      className="w-full py-20 bg-white dark:bg-black"
    >
      <header className="max-w-3xl mx-auto text-center mb-12">
        <h2
          id="upcoming-events"
          className="text-xl md:text-5xl font-bold text-gray-800 dark:text-gray-200"
        >
          Upcoming <span className="font-extrabold">Events</span>
        </h2>

        <p className="text-gray-700 dark:text-gray-400 mt-4 leading-relaxed">
          Join us in upcoming events like Janmashtami, Ratha Yatra, and Kumbh
          Mela 2025. <br />
          Be a part of mass prasadam distribution, annadaan drives, and various
          seva opportunities. <br />
          Serve, donate, and spread love through food.
        </p>
      </header>

      {/* ✅ CAROUSEL SECTION */}
      <div className="max-w-7xl mx-auto px-4">
        <Carousel items={cards} />
      </div>
    </section>
  );
};

export default Upcoming;
