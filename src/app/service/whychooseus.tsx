"use client";
import React from "react";
// import { cn } from "@/lib";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";

const WhyChooseUs = () => {
  // const content = [
  //   {
  //     title: "Interactive Experience",
  //     description: "Engage with our 3D models and interactive demonstrations",
  //     content: (
  //       <div className="h-full w-full flex items-center justify-center text-6xl">
  //         🎮
  //       </div>
  //     ),
  //   },
  //   {
  //     title: "Cutting-edge Technology",
  //     description: "Built with Next.js 15, TypeScript, and modern web standards",
  //     content: (
  //       <div className="h-full w-full flex items-center justify-center text-6xl">
  //         🚀
  //       </div>
  //     ),
  //   },
  //   {
  //     title: "Responsive Design",
  //     description: "Perfect experience across all devices and screen sizes",
  //     content: (
  //       <div className="h-full w-full flex items-center justify-center text-6xl">
  //         📱
  //       </div>
  //     ),
  //   },
  // ];
  const content = [
      {
    title: "Global Collaboration",
    description: "Trusted by startups and enterprises worldwide with a strong partner ecosystem.",
    content: (
        <div className="h-full w-full flex items-center justify-center">
          <Image
            src="/photosByEhshan/whychooseus4.gif"
            alt="Proven Track Record"
            width={300}
            height={200}
            className="h-full w-full object-cover"
          />
        </div>
      ) 
  },
  {
    title: "Seamless User Experience",
    description: "Design-first approach ensuring intuitive, engaging, and user-friendly products.",  
    content: (
        <div className="h-full w-full flex items-center justify-center">
          <Image
            src="/photosByEhshan/whychooseus3.webp"
            alt="Proven Track Record"
            width={300}
            height={200}
            className="h-full w-full object-cover"
          />
        </div>
      ) 
  },
  {
    title: "Proven Track Record",
    description: "Delivered 50+ successful projects across diverse industries with measurable results.",
     content: (
        <div className="h-full w-full flex items-center justify-center">
          <Image
            src="/photosByEhshan/cubeinnovators2.jpg"
            alt="Proven Track Record"
            width={300}
            height={200}
            className="h-full w-full object-cover"
          />
        </div>
      ) 
  },
   {
    title: "AI-Driven Innovation",
    description: "We integrate cutting-edge AI to create smarter, faster, and scalable solutions.",
    content: (
        <div className="h-full w-full flex items-center justify-center">
          <Image
            src="/photosByEhshan/whychooseus2.jpg"
            alt="Proven Track Record"
            width={300}
            height={200}
            className="h-full w-full object-cover"
          />
        </div>
      ) 
  },
];


  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6  bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-6xl font-bold text-white text-center mb-8 sm:mb-12 lg:mb-16 px-2 sm:px-0">
          Why Choose Our{" "}
          <span className="text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text">
            Solutions
          </span>
        </h2>

        <div className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-800">
          <StickyScroll content={content} />
        </div>

        {/* Mobile fallback grid for smaller screens */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:hidden">
          {content.map((feature, index) => (
            <div
              key={index}
              className="group p-6 sm:p-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl hover:from-gray-700 hover:to-gray-800 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl"
            >
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 group-hover:animate-bounce text-center sm:text-left">
                {feature.content}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4 text-center sm:text-left">
                {feature.title}
              </h3>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base text-center sm:text-left">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;