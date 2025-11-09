import React from "react";
import PropTypes from "prop-types";

// The data for your stories remains the same.
const stories = [
    {
        title: "The journey to relaxation.",
        description:
            "Finding a hammock you can truly relax in didn’t happen overnight. It started with a chance discovery while on vacation, and took a lot of hard work (and a lot of hanging around) to bring the softest, most comfortable, and thoughtfully crafted hammocks to your backyard.",
        image: "https://cdn.easyfrontend.com/pictures/featured/featured_13.png",
    },
    {
        title: "The way to heaven.",
        description:
            "More off this less hello salamander lied porpoise much over tightly circa horse taped so innocuously outside crud mightily rigorous negative one inside gorilla and drew humbly shot tortoise inside opaquely. Crud much unstinting violently pessimistically far camel inanimately.",
        image: "https://cdn.easyfrontend.com/pictures/about/about9.jpg",
    },
];

// The StoryItem component is now simpler and more robust.
const StoryItem = ({ item, index }) => {
    const { title, description, image } = item;
    // Determines if the index is even for alternating the layout.
    const isEven = index % 2 === 0;

    return (
        // Each story is a grid that's 1 column on mobile and 12 on medium screens up.
        <div className="grid grid-cols-1 md:grid-cols-12 md:gap-8 lg:gap-16 items-center">
            {/* Image Container */}
            <div
                className={`col-span-1 md:col-span-5 ${
                    // The order of the image and text flips based on whether the item is even or odd.
                    isEven ? "md:order-1" : "md:order-2"
                }`}
            >
                <img
                    src={image}
                    alt={title}
                    className="rounded-2xl w-full h-auto shadow-lg"
                />
            </div>

            {/* Text Container */}
            <div
                className={`col-span-1 md:col-span-7 mt-6 md:mt-0 ${
                    isEven ? "md:order-2" : "md:order-1"
                }`}
            >
                <h3 className="text-2xl lg:text-3xl font-bold mb-4">{title}</h3>
                <p className="text-base lg:text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                    {description}
                </p>
            </div>
        </div>
    );
};

StoryItem.propTypes = {
    item: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
};

// The main component with responsive header text and layout.
const About = () => {
    return (
        <section className="py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white">
            {/* Using container with padding for overall layout */}
            <div className="container mx-auto px-4">
                {/* Header Section: Centered with max-width for readability */}
                <div className="mx-auto max-w-3xl text-center mb-12 md:mb-20">
                    <h2 className="text-3xl leading-tight sm:text-4xl md:text-5xl font-bold mb-4">
                        Our Story
                    </h2>
                    <p className="text-lg text-slate-500 dark:text-slate-400">
                        We not only make the world’s most comfortable hammocks, but
                        through training and sustainable job creation, we empower our
                        weavers and their families to break the cycle of poverty and build
                        a brighter future.
                    </p>
                </div>

                {/* Stories Container: Uses space-y to add vertical gap between items */}
                <div className="space-y-16">
                    {stories.map((item, i) => (
                        <StoryItem item={item} index={i} key={i} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;