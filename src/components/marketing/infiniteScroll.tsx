"use client";

import React from "react";

interface StatItem {
  number: string;
  label: string;
}

const stats: StatItem[] = [
  { number: "200+", label: "Websites & Apps Delivered" },
  { number: "150+", label: "Brands Boosted with Social Media" },
  { number: "500+", label: "Content Pieces Written" },
  { number: "100+", label: "Videos & Ads Produced" },
  { number: "300+", label: "Graphic Designs Created" },
  { number: "50+", label: "Active Clients Worldwide" },
  { number: "24/7", label: "Project Support & Communication" },
  { number: "99%", label: "Client Satisfaction Rate" },
];

export default function InfiniteStatsSection() {
  return (
    <section className="w-full  py-16 overflow-hidden">
      <div className="relative">
        {/* Infinite scrolling container */}
        <div className="flex animate-scroll">
          {/* First set of stats */}
          <div className="flex space-x-16 lg:space-x-24 shrink-0">
            {stats.map((stat, index) => (
              <div
                key={`first-${index}`}
                className="text-center min-w-[200px] lg:min-w-[300px]"
              >
                <div className="text-4xl lg:text-6xl xl:text-7xl font-bold text-purple-400 mb-2 lg:mb-4">
                  {stat.number}
                </div>
                <div className="text-sm lg:text-base text-gray-300 whitespace-nowrap px-4">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
          
          {/* Duplicate set for seamless loop */}
          <div className="flex space-x-16 lg:space-x-24 shrink-0 ml-16 lg:ml-24">
            {stats.map((stat, index) => (
              <div
                key={`second-${index}`}
                className="text-center min-w-[200px] lg:min-w-[300px]"
              >
                <div className="text-4xl lg:text-6xl xl:text-7xl font-bold text-purple-400 mb-2 lg:mb-4">
                  {stat.number}
                </div>
                <div className="text-sm lg:text-base text-gray-300 whitespace-nowrap px-4">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}