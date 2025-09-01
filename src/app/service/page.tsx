// page.tsx
"use client";

import { useState } from "react";
import {
  ChevronDown,
} from "lucide-react";
import Whychooseus from "./whychooseus";

export default function BusinessSolutionsPage() {
  const [splineLoaded, setSplineLoaded] = useState(false);

  return (
    <div className="min-h-screen -mt-10 lg:-mt-24 bg-gradient-to-br from-gray-900 via-black to-gray-800">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center lg:justify-between px-4 sm:px-6 lg:px-16 overflow-hidden pt-16 sm:pt-20 lg:pt-8">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%239C92AC\' fill-opacity=\'0.1\'%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'1\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        </div>

        {/* Content */}
        <div className="w-full z-10 text-center lg:text-left mb-8 lg:mb-0 lg:max-w-2xl lg:flex-1 lg:pr-8">
          <div className="mb-4 sm:mb-6">
            <span className="text-gray-400 text-xs sm:text-sm uppercase tracking-wider font-semibold">
              Our Services
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
            We Provide Best <br className="hidden sm:block" />
            <span className="text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text">
              Business Solutions
            </span>
          </h1>

          <p className="text-gray-300 text-base sm:text-lg lg:text-xl leading-relaxed mb-8 sm:mb-10 lg:mb-12 max-w-xl mx-auto lg:mx-0 mt-4 sm:mt-6 lg:mt-8 font-medium px-2 sm:px-0">
            We deliver top-notch business solutions tailored to meet your unique
            needs, ensuring efficiency, growth, and success. Our expert team
            leverages innovative strategies and technologies to drive your
            business forward and achieve outstanding results.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start">
            <button className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25">
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            <button className="group px-6 sm:px-8 py-3 sm:py-4 border-2 border-gray-600 hover:border-blue-500 text-white font-semibold rounded-lg transition-all duration-300 hover:bg-blue-500/10 hover:shadow-lg">
              Learn More
              <ChevronDown
                className="inline-block ml-2 group-hover:translate-y-1 transition-transform duration-300"
                size={16}
              />
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mt-12 sm:mt-14 lg:mt-16 pt-6 sm:pt-8 border-t border-gray-700">
            <div className="text-center">
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-400 mb-1 sm:mb-2">500+</div>
              <div className="text-gray-400 text-xs sm:text-sm">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-cyan-400 mb-1 sm:mb-2">98%</div>
              <div className="text-gray-400 text-xs sm:text-sm">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-green-400 mb-1 sm:mb-2">24/7</div>
              <div className="text-gray-400 text-xs sm:text-sm">Support Available</div>
            </div>
          </div>
        </div>

        {/* 3D Model Container - Desktop and Tablet */}
        <div className="hidden md:block flex-1 relative w-full max-w-3xl lg:max-w-none min-h-[500px] lg:min-h-[600px] xl:min-h-[650px] lg:-mt-20">
          <iframe
            src="https://my.spline.design/genkubgreetingrobot-aIKuTgbAxIuafedTxoFGia3U/"
            frameBorder="0"
            width="100%"
            height="500px"
            className={`md:h-[500px] lg:h-[650px] transition-opacity duration-1000 ${
              splineLoaded ? "opacity-100" : "opacity-0"
            }`}
            onLoad={() => setSplineLoaded(true)}
            title="Interactive 3D Business Model"
          />
        </div>
      </section>

      {/* Features Section */}
     <Whychooseus/>
    </div>
  );
}