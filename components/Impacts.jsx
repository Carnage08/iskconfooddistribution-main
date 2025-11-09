"use client";
import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";


// --- Start of StickyScroll Component Definition ---
const StickyScroll = ({ content }) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const element = ref.current;
      if (!element) return;

      // More robust scroll calculation that works on various screen sizes
      const scrollTop = element.scrollTop;
      const scrollHeight = element.scrollHeight - element.clientHeight;
      if (scrollHeight <= 0) return;

      const progress = scrollTop / scrollHeight;
      const cardLength = content.length;
      const newActiveCard = Math.min(
        Math.floor(progress * cardLength),
        cardLength - 1
      );
      
      setActiveCard(newActiveCard);
    };

    const container = ref.current;
    if (container) {
        container.addEventListener("scroll", handleScroll, { passive: true });
    }
    
    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, [content]);

  return (
    <div
  className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 h-auto overflow-visible p-4 md:p-10"
  ref={ref}
>
  {/* Left Side Text */}
  <div className="flex flex-col justify-center">
    {content.map((item, index) => (
      <div key={index} className="my-16 lg:my-20">
        <h2
          className={`text-xl md:text-2xl font-bold text-slate-900 dark:text-slate-100 transition-opacity duration-300 ${
            activeCard === index ? "opacity-100" : "opacity-30"
          }`}
        >
          {item.title}
        </h2>
        <p
          className={`text-base md:text-lg mt-6 max-w-md text-slate-700 dark:text-slate-300 transition-opacity duration-300 ${
            activeCard === index ? "opacity-100" : "opacity-30"
          }`}
        >
          {item.description}
        </p>
      </div>
    ))}
  </div>

  {/* Right Side Bigger Image */}
  <div className="lg:sticky top-10 h-[24rem] w-full rounded-xl overflow-hidden shadow-lg">
    {content[activeCard] ? content[activeCard].content : null}
  </div>
</div>

  );
};
// --- End of StickyScroll Component Definition ---


const content = [
  {
    title: "Eradicating Hunger Among Children",
    description:
      "ISKCON’s Mid-Day Meal Program has become one of the largest food relief initiatives in India, serving millions of nutritious meals to school children. This directly helps reduce classroom hunger, ensuring that children from underprivileged families do not drop out of school simply due to lack of food.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="https://i.pinimg.com/736x/48/53/a0/4853a0725f3ceb148e0a357db88f01b7.jpg"
          width="500"
          height="500"
          className="h-full w-full object-cover"
          alt="linear board demo" />
      </div>
    ),
  },
  {
    title: "Providing Relief During Crises",
    description:
      "Apart from schools, ISKCON also provides large-scale food relief during natural disasters, pandemics, and emergencies. For example, during COVID-19, ISKCON distributed millions of meals to stranded workers, slum dwellers, and daily wage earners, becoming a lifeline for many families.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="https://iskconfoodrelief.com/wp-content/uploads/2022/06/iskcon-attapur-500x375.jpg"
          width="500"
          height="500"
          className="h-full w-full object-cover"
          alt="linear board demo" />
      </div>
    ),
  },
  {
    title: "Partnership for Mahaprasad Seva at Maha Kumbh (2025)",
    description:
      "ISKCON partnered with the Adani Group to expand its Mahaprasad (sacred food) service during the entire duration of the Kumbh Mela. Initially, ISKCON had planned to serve around 10,000 meals a day, but with the support and resources provided by Adani, the initiative was scaled up to the capacity of serving virtually “unlimited meals” to the pilgrims.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="https://iskconfoodrelief.com/wp-content/uploads/2022/06/iskcon-attapur-500x375.jpg"
          width="500"
          height="500"
          className="h-full w-full object-cover"
          alt="linear board demo" />
      </div>
    ),
  },
  {
    title: "Approaching 4 Billion Meals Served Globally by ISKCON’s Food For Life Network",
    description:
      "Since its founding in 1974, ISKCON’s Food for Life Global (FFLG) program has grown from modest beginnings into a massive global food-relief network operating in over 60 countries. Today, across its many kitchens and affiliates, it serves up to 2 million meals per day, and as of now has delivered nearly 4 billion meals to the needy.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
      <img
        src="https://res.cloudinary.com/dptswux6y/video/upload/v1762059782/1001_ehd3df.mov"
        width="500"
        height="500"
        className="h-full w-full object-cover"
        alt="linear board demo" />
    </div>
    ),
  },
];

export default function Impacts() {
  return (
    <div className="w-full py-12 md:py-20" id="Impacts">
      <div className="flex justify-center items-center px-4">
        {/* Adjusted size and added dark mode invert */}
        <Image src='https://res.cloudinary.com/dptswux6y/image/upload/v1762059668/Impact_lon5ey.png' width={300} height={50} className=" h-auto dark:invert" alt="Impact"/>
     </div>
      <StickyScroll content={content} />
    </div>
  );
}

