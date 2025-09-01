"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere } from "@react-three/drei";
import AboutCTA from "@/components/marketing/aboutCta";
import InfiniteStatsSection from "@/components/marketing/infiniteScroll";
import { BentoDemo } from "@/components/marketing/BentoDemo";
// import DiagonalAboutSection from "@/components/marketing/DiagonalAboutSection";
import TiltedAboutPanel from "@/components/marketing/DiagonalAboutSection";
import CTA from "@/components/marketing/cta";
// import AboutService from "@/components/marketing/aboutservice";

function FloatingElement({
  position,
  color,
  speed = 1,
}: {
  position: [number, number, number];
  color: string;
  speed?: number;
}) {
  const meshRef = useRef<any>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x =
        Math.sin(state.clock.elapsedTime * speed) * 0.2;
      meshRef.current.rotation.y =
        Math.sin(state.clock.elapsedTime * speed * 0.5) * 0.3;
      meshRef.current.position.y =
        position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.5;
    }
  });

  return (
    <Sphere ref={meshRef} position={position} args={[0.3, 16, 16]}>
      <meshStandardMaterial color={color} transparent opacity={0.6} />
    </Sphere>
  );
}

function TimelineScene() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={0.8} />
      <FloatingElement position={[-2, 0, 0]} color="#3b82f6" speed={0.8} />
      <FloatingElement position={[2, 1, -1]} color="#8b5cf6" speed={1.2} />
      <FloatingElement position={[0, -1, 1]} color="#06b6d4" speed={0.6} />
    </Canvas>
  );
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            background: [
              "radial-gradient(800px circle at 20% 30%, rgba(15, 23, 42, 0.3), transparent 70%)",
              "radial-gradient(800px circle at 80% 70%, rgba(30, 41, 59, 0.2), transparent 70%)",
              "radial-gradient(800px circle at 40% 80%, rgba(15, 23, 42, 0.3), transparent 70%)",
              "radial-gradient(800px circle at 60% 20%, rgba(30, 41, 59, 0.2), transparent 70%)",
            ],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute inset-0"
        />

        <motion.div
          className="absolute inset-0 opacity-[0.01]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.1) 1px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
          animate={{
            backgroundPosition: ["0px 0px", "50px 50px", "0px 0px"],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 pt-2 lg:pt-4">
        {/* Desktop Layout (unchanged) */}
        <div
          className="hidden lg:grid grid-cols-2 gap-16 items-start"
          style={{ minHeight: "calc(100vh - 4rem)" }}
        >
          {/* Left Side - About Us Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center h-full space-y-8"
          >
            <motion.h1
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[18rem] xl:text-[20rem] font-black text-white leading-[0.7] tracking-[-0.05em] drop-shadow-lg transform scale-y-125"
              style={{
                fontFamily: "Arial Black, Helvetica, sans-serif",
                fontStretch: "ultra-condensed",
                letterSpacing: "-0.08em",
              }}
            >
              <span className="mb-5">ABOUT</span>
              <br />
              <span>US</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6 text-gray-300 text-xl leading-relaxed"
            >
              <p>
                We are a creative agency driven by design, technology, and
                strategy. Our mission is to craft experiences that inspire
                audiences and elevate brands across every digital touchpoint.
              </p>
              <p>
                From web and mobile platforms to social campaigns and branded
                content, our team blends creativity with precision to deliver
                results that matter. We believe great work is where vision meets
                execution.
              </p>
              <p>
                With a focus on innovation and impact, we partner with
                businesses ready to stand out. Every project is an opportunity
                to build stories that last and brands that lead.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Side - Spline 3D Model and Philosophy */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-8 flex flex-col justify-start h-full pt-40"
          >
            {/* Spline 3D Model */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1.2, delay: 0.6 }}
              whileHover={{ scale: 1.02, rotateY: 2 }}
              className="relative aspect-[3/2] w-full rounded-2xl overflow-hidden shadow-2xl"
            >
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(59, 130, 246, 0.1)",
                    "0 0 30px rgba(67, 56, 202, 0.15)",
                    "0 0 20px rgba(59, 130, 246, 0.1)",
                  ],
                }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                className="w-full h-full rounded-2xl mt-20"
              >
                <iframe
                  src="https://my.spline.design/100followers-zXEbhunYXfSwT9aaLtxfv8c3/"
                  frameBorder="0"
                  width="100%"
                  height="100%"
                  className="rounded-2xl"
                  title="3D Interactive Model"
                />
              </motion.div>
            </motion.div>

            {/* Our Philosophy Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="space-y-4"
            >
              <motion.h2 className="text-3xl font-bold text-white">
                Our Philosophy
              </motion.h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                At Atoms, we believe in creating digital solutions that
                seamlessly blend innovation with functionality. Our approach
                combines cutting-edge technology with human-centered design to
                deliver experiences that not only meet but exceed expectations.
                We strive to push the boundaries of what's possible in the
                digital realm.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Mobile & Tablet Layout */}
        <div className="lg:hidden">
          {/* Mobile/Tablet Header */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center py-8 sm:py-12"
          >
            <h1
              className="text-[6rem] sm:text-[12rem] md:text-[14rem] font-black text-white leading-[0.7] tracking-[-0.05em] drop-shadow-lg transform scale-y-125"
              style={{
                fontFamily: "Arial Black, Helvetica, sans-serif",
                fontStretch: "ultra-condensed",
                letterSpacing: "-0.08em",
              }}
            >
              <span>ABOUT</span>
              <br />
              <span>US</span>
            </h1>
          </motion.div>

          {/* Mobile/Tablet Content */}
          <div className="space-y-8 sm:space-y-12">
            {/* About Text Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-4 sm:space-y-6 text-gray-300 text-base sm:text-lg leading-relaxed px-2"
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis
                aute irure dolor in reprehenderit in voluptate.
              </p>
              <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint
                occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt.
              </p>
              <p className="hidden sm:block">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis.
              </p>
            </motion.div>

            {/* 3D Model Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="relative"
            >
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 15px rgba(59, 130, 246, 0.1)",
                    "0 0 25px rgba(67, 56, 202, 0.15)",
                    "0 0 15px rgba(59, 130, 246, 0.1)",
                  ],
                }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                className="relative aspect-[4/3] sm:aspect-[3/2] w-full rounded-xl sm:rounded-2xl overflow-hidden shadow-xl"
              >
                <iframe
                  src="https://my.spline.design/100followers-zXEbhunYXfSwT9aaLtxfv8c3/"
                  frameBorder="0"
                  width="100%"
                  height="100%"
                  className="rounded-xl sm:rounded-2xl"
                  title="3D Interactive Model"
                />
              </motion.div>
            </motion.div>

            {/* Philosophy Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="space-y-3 sm:space-y-4 px-2"
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                Our Philosophy
              </h2>
              <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
                At Atoms, we believe in creating digital solutions that
                seamlessly blend innovation with functionality. Our approach
                combines cutting-edge technology with human-centered design to
                deliver experiences that not only meet but exceed expectations.
                We strive to push the boundaries of what's possible in the
                digital realm.
              </p>
            </motion.div>
          </div>
        </div>
        <div>
          <InfiniteStatsSection />
        </div>

        {/* About CTA Section */}
        <div className="mt-8 sm:mt-12 lg:mt-14 mb-8 sm:mb-12 lg:mb-14">
          <AboutCTA />
        </div>
        <div className="mb-8 sm:mb-12 lg:mb-14">
          <TiltedAboutPanel />
        </div>

        <div className="mb-8 sm:mb-12 lg:mb-14">
          <BentoDemo />
        </div>
      </div>
      <div>
        <CTA />
      </div>
    </div>
  );
}
