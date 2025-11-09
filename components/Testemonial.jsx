'use client';

import React, { useState, useMemo, useCallback } from "react";

const testimonialList = [
  [
    {
      img: "https://is1-ssl.mzstatic.com/image/thumb/Podcasts126/v4/9a/44/b7/9a44b7c6-7e6a-8383-9edb-4c1616a37a56/mza_4222436687382789354.jpg/1200x1200bf-60.jpg",
      name: "Narendra Modi",
      position: "Prime Minister of India",
      content:
        "The spirit of service is a symbol of secularism. The main foundation of our spiritual culture is the spirit of service...",
    },
    {
      img: "https://voxhour.com/wp-content/uploads/2021/04/Vikas-Khanna.jpg",
      name: "Vikas Khanna",
      position: "Michelin-starred chef & humanitarian",
      content:
        "My association to this noble cause goes back to my days working with ISKCON in New Delhi...",
    },
    {
      img: "https://cdn.mos.cms.futurecdn.net/GkeSqnHP3o4skUPJa7QSWZ.jpg",
      name: "Steve Jobs",
      position: "Co-founder of Apple Inc.",
      content:
        "I would walk 7 miles every Sunday night to get one good meal at the Hare Krishna temple...",
    },
  ],
  // ✅ Add additional groups here safely
];

const Testimonial = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = useCallback((i) => setIndex(i), []);

  // ✅ Memoized current group for performance
  const currentTestimonials = useMemo(
    () => testimonialList[index],
    [index]
  );

  return (
    <section
      className="py-16 md:py-28 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white"
      aria-labelledby="testimonial-heading"
    >
      <div className="container mx-auto px-4">

        {/* ✅ Heading */}
        <div className="text-center mb-12 md:mb-16">
          <hr className="w-20 mx-auto mb-4 border-gray-300 dark:border-gray-600" />
          <h2
            id="testimonial-heading"
            className="text-3xl md:text-4xl font-bold"
          >
            What They Say
          </h2>
        </div>

        {/* ✅ Cards Grid — improved mobile layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {currentTestimonials.map((item, i) => (
            <article
              key={i}
              className="p-8 xl:p-10 rounded-2xl h-full 
                bg-white dark:bg-[#112031]
                shadow-[0_4px_20px_rgba(0,0,0,0.08)]
                hover:shadow-[0_8px_28px_rgba(0,0,0,0.12)]
                transition-all duration-300"
            >
              <header className="flex items-center mb-6">
                <img
                  src={item.img}
                  alt={item.name}
                  loading="lazy"
                  decoding="async"
                  className="w-16 h-16 rounded-full border shadow-sm mr-4 object-cover"
                />
                <div>
                  <h4 className="text-xl font-semibold">{item.name}</h4>
                  <p className="text-sm opacity-80">{item.position}</p>
                </div>
              </header>

              <p className="opacity-75 leading-relaxed text-[15px]">
                {item.content}
              </p>
            </article>
          ))}
        </div>

        {/* ✅ Slider Dots — Improved accessiblity + animation */}
        <div className="flex justify-center gap-3 mt-10 md:mt-12">
          {testimonialList.map((_, i) => {
            const isActive = index === i;
            return (
              <button
                key={i}
                aria-label={`Show testimonial group ${i + 1}`}
                onClick={() => handleSelect(i)}
                className={`
                  w-10 h-[3px] rounded-full transition-all duration-300
                  ${isActive
                    ? "bg-[#EBA83A] scale-125"   /* saffron highlight */
                    : "bg-gray-400 dark:bg-slate-700"
                  }
                `}
              />
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Testimonial;
