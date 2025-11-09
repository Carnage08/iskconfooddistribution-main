"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const cardVariant = {
  hidden: { opacity: 0, scale: 0.92, y: 30 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" }
  })
};

export default function Gallery() {
  return (
    <section className="w-full bg-[#FAFAFA] py-24 px-6 md:px-12">

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-6"
      >
        Our Gallery
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center text-gray-600 max-w-2xl mx-auto mb-16"
      >
        Capturing the spirit of service — feeding communities with compassion.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">

        {[
          {
            img: "https://res.cloudinary.com/dptswux6y/image/upload/v1762065315/P1569466_gmaeln.jpg",
            title: "Nutritious Meals for Children",
          },
          {
            img: "https://res.cloudinary.com/dptswux6y/image/upload/v1762059726/P1568789_jyjdpu.jpg",
            title: "Emergency Disaster Relief",
          },
          {
            img: "https://res.cloudinary.com/dptswux6y/image/upload/v1762065322/P1569474_bhkvty.jpg",
            title: "Volunteers Serving with Love",
          },
        ].map((card, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariant}
            className="bg-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all"
          >
            <img
              src={card.img}
              alt={card.title}
              className="w-full h-64 object-cover rounded-2xl mb-5"
            />
            <h3 className="text-xl font-semibold text-gray-900">
              {card.title}
            </h3>
          </motion.div>
        ))}

      </div>

      {/* View Gallery Button */}
      <div className="text-center mt-16">
        <Link href="/Gallery">
          <button className="px-8 py-4 bg-black text-white rounded-full text-lg font-medium hover:bg-gray-900 transition-all">
            View Full Gallery →
          </button>
        </Link>
      </div>

    </section>
  );
}
