"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib";
import React from "react";

// Enhanced Boxes Background Component
const BoxesCore = ({ className, ...rest }: { className?: string }) => {
  const rows = new Array(50).fill(1); // Reduced number for better performance
  const cols = new Array(30).fill(1);
  let colors = [
    "#38bdf8", "#818cf8", "#c084fc", "#e879f9", "#22d3ee",
    "#f97316", "#f43f5e", "#a855f7", "#ec4899", "#06b6d4"
  ];
  
  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div
      style={{
        transform: `translate(-40%,-60%) skewX(-48deg) skewY(14deg) scale(0.675) rotate(0deg) translateZ(0)`,
      }}
      className={cn(
        "absolute -top-1/4 left-1/4 z-0 flex h-full w-full -translate-x-1/2 -translate-y-1/2 p-4",
        className,
      )}
      {...rest}
    >
      {rows.map((_, i) => (
        <motion.div
          key={`row` + i}
          className="relative h-16 w-16 border-l border-slate-300/70" // Brighter borders
        >
          {cols.map((_, j) => (
            <motion.div
              whileHover={{
                backgroundColor: `${getRandomColor()}`,
                transition: { duration: 0.2 },
              }}
              animate={{
                transition: { duration: 2 },
              }}
              key={`col` + j}
              className="relative h-16 w-16 border-t border-r border-slate-300/70" // Brighter borders
            >
              {j % 2 === 0 && i % 2 === 0 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="pointer-events-none absolute -top-[14px] -left-[22px] h-6 w-10 stroke-[1px] text-slate-300/80" // Brighter icon
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v12m6-6H6"
                  />
                </svg>
              ) : null}
            </motion.div>
          ))}
        </motion.div>
      ))}
    </div>
  );
};

const Boxes = React.memo(BoxesCore);

type AboutCTAProps = {
  className?: string;
  heading?: string;
  description?: string;
  leftName?: string;
  leftTitle?: string;
  rightName?: string;
  rightTitle?: string;
};

export default function AboutCTA({
  className,
  heading = "MEET THE PRINCIPALS",
  description = "As principal and licensed designer, the founder oversees the day-to-day operations and the design and manufacture of our firm's custom furniture and award-winning accessories.",
  leftName = "Md Ehshan ",
  leftTitle = "FOUNDER AND PRINCIPAL",
  rightName = "Anikesh Kumar",
  rightTitle = "FOUNDER AND PRINCIPAL",
}: AboutCTAProps) {
  const fadeUp = {
    initial: { opacity: 0, y: 24 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section
      className={cn("w-full", "py-8 sm:py-12 lg:py-16 xl:py-20 rounded-3xl relative overflow-hidden", className)}
      aria-labelledby="about-cta-heading"
    >
      {/* Enhanced Boxes Background */}
      <div className="absolute inset-0 z-0">
        <Boxes />
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-black/60 to-gray-700/80" />
      </div>
      
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        {/* Desktop Layout (unchanged) */}
        <div className="hidden lg:grid grid-cols-[minmax(260px,0.9fr)_1.2fr_minmax(260px,0.9fr)] items-end gap-8">
          {/* LEFT PORTRAIT */}
          <motion.div
            className="flex flex-col"
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[28px] bg-white shadow-2xl">
              <Image
                src="/images/ehshan.jpg"
                alt="Portrait"
                fill
                sizes="33vw"
                className="object-cover"
                style={{ objectPosition: "left center" }}
                priority={false}
              />
            </div>
            <div className="pt-6">
              <p className="text-3xl text-orange-500 font-semibold tracking-tight">
                {leftName}
              </p>
              <p className="text-sm text-gray-300 uppercase tracking-[0.08em]">
                {leftTitle}
              </p>
            </div>
          </motion.div>

          {/* CENTER CARD WITH TAB AND SIDE NOTCHES */}
          <motion.div
            className="relative isolate"
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="relative rounded-[28px] bg-white/95 backdrop-blur-sm px-10 py-12 shadow-2xl">
              <div
                aria-hidden="true"
                className="absolute -top-7 left-1/2 z-10 h-14 w-[68%] -translate-x-1/2 rounded-[28px] bg-black backdrop-blur-sm shadow-lg"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-0 top-24 z-10 -ml-4 h-16 w-8 rounded-full bg-black"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute right-0 top-24 z-10 -mr-4 h-16 w-8 rounded-full bg-black"
              />

              <div className="relative z-20 flex flex-col items-center text-center">
                <h2
                  id="about-cta-heading"
                  className="text-balance text-5xl text-black font-extrabold tracking-tight"
                >
                  {heading}
                </h2>

                {/* pill-shaped collage strip from the same image */}
                <div className="mt-6 w-full max-w-md">
                  <div className="relative mx-auto h-20 w-full overflow-hidden rounded-full ring-2 ring-black/10 shadow-lg">
                    <Image
                      src="/photosByEhshan/clashofcode4.jpg"
                      alt="Detail collage"
                      fill
                      sizes="360px"
                      className="object-cover"
                      style={{ objectPosition: "center 56%" }}
                      priority={false}
                    />
                  </div>
                </div>

                <p className="mt-8 max-w-[56ch] text-base leading-relaxed text-gray-700">
                  {description}
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT PORTRAIT */}
          <motion.div
            className="flex flex-col items-end"
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[28px] bg-white shadow-2xl">
              <Image
                src="/images/Anikesh.jpg"
                alt="Portrait"
                fill
                sizes="33vw"
                className="object-cover"
                style={{ objectPosition: "right center" }}
                priority={false}
              />
            </div>
            <div className="pt-6 text-right">
              <p className="text-3xl text-sky-500 font-semibold tracking-tight">
                {rightName}
              </p>
              <p className="text-sm text-gray-300 uppercase tracking-[0.08em]">
                {rightTitle}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Tablet & Mobile Layout */}
        <div className="lg:hidden space-y-8">
          {/* CENTER CARD FIRST ON MOBILE/TABLET */}
          <motion.div
            className="relative isolate order-1"
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="relative rounded-[20px] sm:rounded-[28px] bg-white/95 backdrop-blur-sm px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10 shadow-2xl">
              {/* Tab only visible on tablet and up */}
              <div
                aria-hidden="true"
                className="hidden sm:block absolute -top-5 md:-top-7 left-1/2 z-10 h-10 md:h-14 w-[60%] md:w-[68%] -translate-x-1/2 rounded-[20px] md:rounded-[28px] bg-black backdrop-blur-sm shadow-lg"
              />
              {/* Side notches only visible on tablet and up */}
              <div
                aria-hidden="true"
                className="hidden sm:block pointer-events-none absolute left-0 top-16 md:top-24 z-10 -ml-3 md:-ml-4 h-12 md:h-16 w-6 md:w-8 rounded-full bg-black"
              />
              <div
                aria-hidden="true"
                className="hidden sm:block pointer-events-none absolute right-0 top-16 md:top-24 z-10 -mr-3 md:-mr-4 h-12 md:h-16 w-6 md:w-8 rounded-full bg-black"
              />

              <div className="relative z-20 flex flex-col items-center text-center">
                <h2
                  id="about-cta-heading"
                  className="text-balance text-2xl sm:text-3xl md:text-4xl text-black font-extrabold tracking-tight"
                >
                  {heading}
                </h2>

                {/* pill-shaped collage strip */}
                <div className="mt-4 sm:mt-6 w-full max-w-xs sm:max-w-sm md:max-w-md">
                  <div className="relative mx-auto h-16 sm:h-18 md:h-20 w-full overflow-hidden rounded-full ring-2 ring-black/10 shadow-lg">
                    <Image
                      src="/photosByEhshan/clashofcode4.jpg"
                      alt="Detail collage"
                      fill
                      sizes="(max-width: 640px) 80vw, (max-width: 768px) 60vw, 360px"
                      className="object-cover"
                      style={{ objectPosition: "center 56%" }}
                      priority={false}
                    />
                  </div>
                </div>

                <p className="mt-6 sm:mt-8 max-w-[56ch] text-sm sm:text-base leading-relaxed text-gray-700 px-2">
                  {description}
                </p>
              </div>
            </div>
          </motion.div>

          {/* PORTRAITS SECTION */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-6 md:gap-8 order-2">
            {/* LEFT PORTRAIT */}
            <motion.div
              className="flex flex-col items-center sm:items-start"
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="relative aspect-[3/4] w-full max-w-xs sm:max-w-none overflow-hidden rounded-[20px] sm:rounded-[24px] md:rounded-[28px] bg-white shadow-2xl">
                <Image
                  src="/images/ehshan.jpg"
                  alt="Portrait"
                  fill
                  sizes="(max-width: 640px) 80vw, (max-width: 768px) 45vw, 50vw"
                  className="object-cover"
                  style={{ objectPosition: "left center" }}
                  priority={false}
                />
              </div>
              <div className="pt-4 sm:pt-6 text-center sm:text-left">
                <p className="text-xl sm:text-2xl md:text-3xl text-orange-500 font-semibold tracking-tight">
                  {leftName}
                </p>
                <p className="text-xs sm:text-sm text-gray-300 uppercase tracking-[0.08em]">
                  {leftTitle}
                </p>
              </div>
            </motion.div>

            {/* RIGHT PORTRAIT */}
            <motion.div
              className="flex flex-col items-center sm:items-end"
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="relative aspect-[3/4] w-full max-w-xs sm:max-w-none overflow-hidden rounded-[20px] sm:rounded-[24px] md:rounded-[28px] bg-white shadow-2xl">
                <Image
                  src="/images/Anikesh.jpg"
                  alt="Portrait"
                  fill
                  sizes="(max-width: 640px) 80vw, (max-width: 768px) 45vw, 50vw"
                  className="object-cover"
                  style={{ objectPosition: "right center" }}
                  priority={false}
                />
              </div>
              <div className="pt-4 sm:pt-6 text-center sm:text-right">
                <p className="text-xl sm:text-2xl md:text-3xl text-sky-500 font-semibold tracking-tight">
                  {rightName}
                </p>
                <p className="text-xs sm:text-sm text-gray-300 uppercase tracking-[0.08em]">
                  {rightTitle}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}