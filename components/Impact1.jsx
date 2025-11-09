"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// ✅ REPLACED WITH YOUR NGO IMPACT DATA
const cards = [
  {
    title: "Daily Nutritious Meals for School Children",
    highlight: "32,000+ meals served every day",
    desc:
      "Our mid-day meal program ensures that children from underserved communities receive fresh, hygienic, and nutritious meals every school day. By reducing classroom hunger, we help improve attendance, concentration, and overall learning outcomes.",
    cta: "Learn More →",
    color: "#EBA83A", // ✅ saffron devotional theme
    image:
      "https://i.pinimg.com/736x/48/53/a0/4853a0725f3ceb148e0a357db88f01b7.jpg",
  },

  {
    title: "Emergency Food Relief During Disasters",
    highlight: "2,50,000+ meals distributed during crises",
    desc:
      "During floods, pandemics, and other emergencies, our teams mobilize rapidly to deliver hot meals and essential food kits to affected families. Our relief operations ensure that no one goes hungry during times of crisis.",
    cta: "Read Relief Stories →",
    color: "#D26E2C", // ✅ spiritual-warm emergency tone
    image:
      "https://res.cloudinary.com/dptswux6y/image/upload/v1762065322/P1569474_bhkvty.jpg",
  },

  {
    title: "Strengthened by Dedicated Volunteers",
    highlight: "4,500+ active volunteers nationwide",
    desc:
      "Our initiatives are powered by a committed network of volunteers who cook, pack, and distribute meals with devotion and compassion. Their selfless service enables us to reach more communities and expand the impact of our food distribution programs.",
    cta: "Join as a Volunteer →",
    color: "#A94424", // ✅ maroon devotional volunteer tone
    image:
      "https://iskconfoodrelief.com/wp-content/uploads/2022/06/iskcon-attapur-500x375.jpg",
  },
];

export default function Impact1() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div
      ref={containerRef}
      className="relative h-[450vh] bg-black"
      style={{ perspective: "1800px" }}
    >
      <div className="sticky top-0 h-screen flex items-center justify-center">
        {cards.map((card, i) => {
          const start = i / cards.length;
          const end = (i + 1) / cards.length;

          const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);
          const scale = useTransform(scrollYProgress, [start, end], [0.75, 1]);
          const rotateX = useTransform(
            scrollYProgress,
            [start, end],
            [35, 0]
          );
          const rotateY = useTransform(
            scrollYProgress,
            [start, end],
            [-12, 0]
          );
          const z = useTransform(scrollYProgress, [start, end], [-400, 0]);
          const y = useTransform(scrollYProgress, [start, end], [120, 0]);

          return (
            <motion.div
              key={i}
              style={{
                opacity,
                scale,
                y,
                rotateX,
                rotateY,
                z,
                transformStyle: "preserve-3d",
              }}
              className="absolute w-[90%] md:w-[75%] h-[80%] rounded-3xl overflow-hidden shadow-[0px_30px_80px_rgba(0,0,0,0.55)]"
            >
              <div
                className="w-full h-full p-12 md:p-16 flex flex-col md:flex-row gap-10"
                style={{
                  backgroundColor: card.color,
                  boxShadow:
                    "0 20px 60px rgba(0,0,0,0.4), inset 0 0 40px rgba(255,255,255,0.2)",
                }}
              >
                {/* ✅ IMAGE */}
                <img
                  src={card.image}
                  className="w-full md:w-1/2 h-full object-cover rounded-2xl shadow-lg"
                  alt={card.title}
                />

                {/* ✅ TEXT BLOCK */}
                <div className="flex flex-col justify-center md:w-1/2 text-white">
                  <p className="text-lg font-semibold opacity-90 tracking-wide">
                    {card.highlight}
                  </p>

                  <h1 className="text-4xl md:text-5xl font-extrabold mt-3 mb-6">
                    {card.title}
                  </h1>

                  <p className="text-xl opacity-90 leading-relaxed mb-10">
                    {card.desc}
                  </p>

                  <button className="px-6 py-3 border-2 border-white rounded-full text-white text-xl font-semibold hover:bg-white hover:text-black transition-all">
                    {card.cta}
                  </button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
