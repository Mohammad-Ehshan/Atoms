// "use client";

// import { Button } from "@/components/ui/button";
// import { motion } from "framer-motion";
// import {
//   Shield,
//   Zap,
//   Target,
//   Heart,
//   Calendar,
//   MapPin,
//   Users,
//   Cpu,
//   Award,
//   CheckCircle,
//   ArrowRight,
// } from "lucide-react";

// export default function AboutPage() {
//   const fadeInUp = {
//     initial: { opacity: 0, y: 60 },
//     animate: { opacity: 1, y: 0 },
//     transition: { duration: 0.6 },
//   };

//   const staggerContainer = {
//     animate: {
//       transition: {
//         staggerChildren: 0.1,
//       },
//     },
//   };

//   const coreValues = [
//     {
//       icon: Zap,
//       title: "Innovation",
//       description:
//         "We push the boundaries of hardware and software convergence.",
//     },
//     {
//       icon: Shield,
//       title: "Security by Design",
//       description: "Cybersecurity is baked into every product.",
//     },
//     {
//       icon: Target,
//       title: "Impact",
//       description: "We measure success by the real-world benefits we deliver.",
//     },
//     {
//       icon: Heart,
//       title: "Integrity",
//       description: "Transparency and ethical engineering guide us.",
//     },
//   ];

//   const quickFacts = [
//     { icon: Calendar, label: "Founded", value: "May 15, 2025" },
//     {
//       icon: MapPin,
//       label: "Location",
//       value: "Guduvanchery, Tamil Nadu, India",
//     },
//     { icon: Users, label: "Team Size", value: "2–10 engineers & innovators" },
//     { icon: Cpu, label: "Focus Areas", value: "AI • IoT • Cybersecurity" },
//   ];

//   const whyDigiSys = [
//     "Deep Expertise in embedded AI and secure hardware",
//     "End‑to‑end Solutions from prototype to deployment",
//     "Customer‑First Approach ensuring every product addresses a genuine need",
//   ];

//   const trustBadges = [
//     "Secure by Design",
//     "ISO-Certified",
//     "AI-Powered",
//     "IoT-Integrated",
//     "Defense-Grade",
//   ];

//   const timeline = [
//     {
//       year: "2025",
//       event: "Company Founded",
//       description: "DigiSys InnoSol established in Tamil Nadu",
//     },
//     {
//       year: "2025",
//       event: "First AI Product",
//       description: "Launched our first AI-powered IoT solution",
//     },
//     {
//       year: "2026",
//       event: "Healthcare Focus",
//       description: "Expanded into healthcare technology solutions",
//     },
//     {
//       year: "Future",
//       event: "Global Expansion",
//       description: "Planning international market entry",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-black text-white">
//       {/* Hero Section */}

//       <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900/30 via-black to-blue-900/20">
//         {/* Geometric Overlay */}
//         <div className="absolute inset-0 opacity-10">
//           <div className="absolute top-20 left-20 w-32 h-32 border border-blue-500 rotate-45"></div>
//           <div className="absolute top-40 right-32 w-24 h-24 border border-blue-400 rotate-12"></div>
//           <div className="absolute bottom-32 left-1/4 w-40 h-40 border border-blue-600 rotate-45"></div>
//           <div className="absolute bottom-20 right-20 w-28 h-28 border border-blue-500 rotate-12"></div>
//         </div>

//         <div className="relative z-10 container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
//           {/* Text Content */}
//           <div className="lg:w-2/3 text-center lg:text-left">
//             <motion.h1
//               className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent leading-tight"
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//             >
//               About <span className="italic">DigiSys</span> InnoSol
//             </motion.h1>

//             <motion.p
//               className="text-xl md:text-2xl text-blue-100 leading-relaxed max-w-3xl mx-auto lg:mx-0 mb-12"
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//             >
//               DigiSys InnoSol Pvt. Ltd. is a cutting‑edge technology innovator
//               specializing in AI‑powered, IoT‑integrated hardware solutions
//               designed for critical sectors such as healthcare, surveillance,
//               and digital defense.
//             </motion.p>

//             <motion.div
//               className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.4 }}
//             >
//               <Button className="bg-blue-600 hover:bg-blue-700 px-8 py-6 text-lg rounded-xl">
//                 Explore Solutions
//               </Button>
//               <Button
//                 variant="outline"
//                 className="border-blue-400 text-blue-200 hover:bg-blue-900/50 px-8 py-6 text-lg rounded-xl"
//               >
//                 Contact Our Team
//               </Button>
//             </motion.div>
//           </div>

//           {/* Brand Logos Grid */}
//           <div className="lg:w-1/3">
//             <motion.div
//               className="grid grid-cols-2 gap-8"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.6 }}
//             >
//               {["amazon", "apple", "microsoft", "google"].map(
//                 (brand, index) => (
//                   <motion.div
//                     key={brand}
//                     className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20 flex items-center justify-center"
//                     whileHover={{
//                       scale: 1.05,
//                       backgroundColor: "rgba(255,255,255,0.1)",
//                       transition: { duration: 0.3 },
//                     }}
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.2 + index * 0.1 }}
//                   >
//                     <img
//                       src={`./icons/${brand}.svg`}
//                       alt={brand}
//                       className="h-16 w-16 object-contain grayscale hover:grayscale-0 transition-all"
//                     />
//                   </motion.div>
//                 )
//               )}
//             </motion.div>

//             <motion.p
//               className="mt-8 text-blue-300 text-center lg:text-left text-lg"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.8 }}
//             >
//               Trusted by industry leaders worldwide
//             </motion.p>
//           </div>
//         </div>
//       </section>

//       {/* Mission & Vision Cards */}
//       <section className="py-20 px-6">
//         <div className="max-w-6xl mx-auto">
//           <motion.div
//             className="grid md:grid-cols-2 gap-8"
//             variants={staggerContainer}
//             initial="initial"
//             whileInView="animate"
//             viewport={{ once: true }}
//           >
//             <motion.div
//               className="bg-gradient-to-br from-gray-900 to-black border border-blue-500/30 rounded-2xl p-8 hover:border-blue-400/50 transition-all duration-300"
//               variants={fadeInUp}
//             >
//               <div className="flex items-center mb-4">
//                 <Target className="w-8 h-8 text-blue-400 mr-3" />
//                 <h3 className="text-2xl font-bold text-blue-300">Mission</h3>
//               </div>
//               <p className="text-gray-300 text-lg leading-relaxed">
//                 To harness next‑generation AI and IoT to create secure,
//                 intelligent products that solve real‑world challenges.
//               </p>
//             </motion.div>

//             <motion.div
//               className="bg-gradient-to-br from-gray-900 to-black border border-blue-500/30 rounded-2xl p-8 hover:border-blue-400/50 transition-all duration-300"
//               variants={fadeInUp}
//             >
//               <div className="flex items-center mb-4">
//                 <Zap className="w-8 h-8 text-blue-400 mr-3" />
//                 <h3 className="text-2xl font-bold text-blue-300">Vision</h3>
//               </div>
//               <p className="text-gray-300 text-lg leading-relaxed">
//                 A safer, smarter world where connected devices think, learn, and
//                 protect.
//               </p>
//             </motion.div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Core Values */}
//       <section className="py-20 px-6 bg-gradient-to-b from-black to-gray-900">
//         <div className="max-w-6xl mx-auto">
//           <motion.h2
//             className="text-4xl font-bold text-center mb-16 text-blue-300"
//             {...fadeInUp}
//           >
//             Core Values
//           </motion.h2>
//           <motion.div
//             className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
//             variants={staggerContainer}
//             initial="initial"
//             whileInView="animate"
//             viewport={{ once: true }}
//           >
//             {coreValues.map((value, index) => (
//               <motion.div
//                 key={index}
//                 className="bg-black border border-blue-500/30 rounded-xl p-6 text-center hover:border-blue-400/50 hover:bg-gray-900/50 transition-all duration-300"
//                 variants={fadeInUp}
//               >
//                 <value.icon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
//                 <h3 className="text-xl font-semibold text-blue-300 mb-3">
//                   {value.title}
//                 </h3>
//                 <p className="text-gray-400 text-sm leading-relaxed">
//                   {value.description}
//                 </p>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* Timeline Section */}
//       <section className="py-20 px-6 bg-gradient-to-b from-gray-900 to-black">
//         <div className="max-w-6xl  mx-auto">
//           <motion.h2
//             className="text-4xl font-bold text-center mb-16 text-blue-300"
//             {...fadeInUp}
//           >
//             Our Journey
//           </motion.h2>
//           <div className="relative">
//             {/* Timeline Line */}
//             <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-blue-700"></div>

//             {timeline.map((item, index) => (
//               <motion.div
//                 key={index}
//                 className={`flex items-center mb-12 ${
//                   index % 2 === 0 ? "flex-row" : "flex-row-reverse"
//                 }`}
//                 initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//               >
//                 <div
//                   className={`w-5/12 ${
//                     index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"
//                   }`}
//                 >
//                   <div className="bg-gradient-to-br from-gray-900 to-black border border-blue-500/30 rounded-xl p-6">
//                     <h3 className="text-xl font-bold text-blue-300 mb-2">
//                       {item.event}
//                     </h3>
//                     <p className="text-gray-300">{item.description}</p>
//                   </div>
//                 </div>
//                 <div className="w-2/12 flex justify-center">
//                   <div className="w-4 h-4 bg-blue-500 rounded-full border-4 border-black"></div>
//                 </div>
//                 <div className={`w-5/12 ${index % 2 === 0 ? "pl-8" : "pr-8"}`}>
//                   <div className="text-2xl font-bold text-blue-400">
//                     {item.year}
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Quick Facts */}
//       <section className="py-20 px-6 bg-gradient-to-b from-gray-900 to-black">
//         <div className="max-w-6xl mx-auto">
//           <motion.h2
//             className="text-4xl font-bold text-center mb-16 text-blue-300"
//             {...fadeInUp}
//           >
//             Quick Facts
//           </motion.h2>
//           <motion.div
//             className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
//             variants={staggerContainer}
//             initial="initial"
//             whileInView="animate"
//             viewport={{ once: true }}
//           >
//             {quickFacts.map((fact, index) => (
//               <motion.div
//                 key={index}
//                 className="bg-black border border-blue-500/30 rounded-xl p-6 text-center hover:border-blue-400/50 transition-all duration-300"
//                 variants={fadeInUp}
//               >
//                 <fact.icon className="w-10 h-10 text-blue-400 mx-auto mb-4" />
//                 <h3 className="text-lg font-semibold text-blue-300 mb-2">
//                   {fact.label}
//                 </h3>
//                 <p className="text-gray-300 text-sm">{fact.value}</p>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* Why DigiSys */}
//       <section className="py-20 px-6">
//         <div className="max-w-4xl mx-auto">
//           <motion.h2
//             className="text-4xl font-bold text-center mb-16 text-blue-300"
//             {...fadeInUp}
//           >
//             Why DigiSys?
//           </motion.h2>
//           <motion.div
//             className="space-y-6"
//             variants={staggerContainer}
//             initial="initial"
//             whileInView="animate"
//             viewport={{ once: true }}
//           >
//             {whyDigiSys.map((reason, index) => (
//               <motion.div
//                 key={index}
//                 className="flex items-start bg-gradient-to-r from-gray-900/50 to-black border border-blue-500/30 rounded-xl p-6 hover:border-blue-400/50 transition-all duration-300"
//                 variants={fadeInUp}
//               >
//                 <CheckCircle className="w-6 h-6 text-blue-400 mr-4 mt-1 flex-shrink-0" />
//                 <p className="text-gray-300 text-lg">{reason}</p>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* Trust Elements */}
//       <section className="py-20 px-6 bg-gradient-to-b from-black to-gray-900">
//         <div className="max-w-6xl mx-auto">
//           <motion.h2
//             className="text-4xl font-bold text-center mb-16 text-blue-300"
//             {...fadeInUp}
//           >
//             Trust & Certification
//           </motion.h2>
//           <motion.div
//             className="flex flex-wrap justify-center gap-6"
//             variants={staggerContainer}
//             initial="initial"
//             whileInView="animate"
//             viewport={{ once: true }}
//           >
//             {trustBadges.map((badge, index) => (
//               <motion.div
//                 key={index}
//                 className="bg-black border-2 border-blue-500/50 rounded-full px-6 py-3 hover:border-blue-400 hover:bg-blue-500/10 transition-all duration-300"
//                 variants={fadeInUp}
//               >
//                 <div className="flex items-center">
//                   <Award className="w-5 h-5 text-blue-400 mr-2" />
//                   <span className="text-blue-300 font-semibold">{badge}</span>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       {/* <section className="py-20 px-6">
//         <div className="max-w-4xl mx-auto text-center">
//           <motion.h2
//             className="text-4xl font-bold mb-8 text-blue-300"
//             {...fadeInUp}
//           >
//             Ready to Innovate Together?
//           </motion.h2>
//           <motion.p className="text-xl text-gray-300 mb-12" {...fadeInUp}>
//             Join us in building the future of intelligent, secure technology
//             solutions.
//           </motion.p>
//           <motion.div
//             className="flex flex-col sm:flex-row gap-4 justify-center"
//             {...fadeInUp}
//           >
//             <button className="group bg-blue-600 hover:bg-blue-500 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 flex items-center justify-center">
//               Join Us
//               <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
//             </button>
//             <button className="border-2 border-blue-500 text-blue-300 hover:bg-blue-500/10 font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:border-blue-400">
//               Learn More
//             </button>
//           </motion.div>
//         </div>
//       </section> */}
//     </div>
//   );
// }

"use client";

import { AnimatedBeamMultipleOutputDemo } from "@/components/global/animated-beam";
import { motion } from "framer-motion";

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
      <div className="relative z-10 container mx-auto px-6 py-8 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start min-h-screen">
          {/* Left Side - About Us Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center h-full space-y-6 lg:space-y-12"
          >
            <motion.h1
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-7xl md:text-8xl lg:text-9xl font-black text-white leading-none tracking-tight drop-shadow-lg"
            >
              <span>ABOUT</span>
              <br />
              <span>US</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6 text-gray-300 text-lg lg:text-xl leading-relaxed"
            >
              <p>
                We are a passionate team of creators, blending the skills of
                full-stack web development with modern, responsive design. Our
                expertise spans both frontend and backend technologies,
                delivering projects that are functional, scalable, and visually
                engaging for every client.
              </p>
              <p>
                Beyond coding, we specialize in content writing that captures
                attention and communicates ideas clearly. From technical
                documentation to creative storytelling, our words are crafted to
                inform, inspire, and connect with audiences in any industry or
                niche.
              </p>
              <p>
                We also excel in professional video editing, turning raw footage
                into polished, impactful visuals. Combining creativity with
                technical precision, we produce content that engages viewers,
                tells compelling stories, and elevates brand presence across
                digital platforms.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Side - Spline 3D Model and Philosophy */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6 lg:space-y-8 flex flex-col justify-center h-full"
          >
            {/* Spline 3D Model */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1.2, delay: 0.6 }}
              whileHover={{ scale: 1.02, rotateY: 2 }}
              className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-2xl"
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
                className="w-full h-full rounded-2xl"
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
              <motion.h2 className="text-2xl lg:text-3xl font-bold text-white">
                Our Philosophy
              </motion.h2>
              <p className="text-gray-300 text-base lg:text-lg leading-relaxed">
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
      </div>
      <AnimatedBeamMultipleOutputDemo />
    </div>
  );
}
