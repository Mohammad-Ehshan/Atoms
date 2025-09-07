"use client";

import { AnimatePresence, motion } from "framer-motion";
import { CheckIcon, Zap, Star } from "lucide-react";
import { useState } from "react";
import Container from "../global/container";
import { Button } from "../ui/button";

type ColorType = "gray" | "blue" | "purple";

interface ServiceCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  buttonText: string;
  color: ColorType;
  popular?: boolean;
}

const Pricing = () => {
  const [showTechnical, setShowTechnical] = useState(true);

  return (
    <div className="relative py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <Container>
            <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 leading-tight">
              Our Services
            </h2>
            <p className="mt-6 text-lg text-gray-300 max-w-2xl">
              Choose from our range of technical and creative solutions to grow
              your business.
            </p>
          </Container>
        </div>

        {/* Toggle Switch */}
        <div className="flex justify-center mt-12">
          <div className="flex items-center bg-gray-800 rounded-full p-1">
            <button
              onClick={() => setShowTechnical(true)}
              className={`px-6 py-2 rounded-full transition-all ${showTechnical ? "bg-blue-600 text-white" : "text-gray-300 hover:text-white"}`}
            >
              Technical
            </button>
            <button
              onClick={() => setShowTechnical(false)}
              className={`px-6 py-2 rounded-full transition-all ${!showTechnical ? "bg-purple-600 text-white" : "text-gray-300 hover:text-white"}`}
            >
              Creative
            </button>
          </div>
        </div>

        {/* Technical Services */}
        <AnimatePresence mode="wait">
          {showTechnical && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-bold text-white mt-12 mb-8 text-center">
                Technical Services
              </h3>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
                {/* Starter Tier */}
                <ServiceCard
                  title="Starter Tier"
                  price="₹14,499"
                  description="One-page launch site for individuals & small businesses"
                  features={[
                    "1-page fully-responsive website",
                    "Basic SEO setup & 1-month support",
                    "Simple backend integration (forms/email)",
                  ]}
                  buttonText="Get Started"
                  color="gray"
                />

                {/* Professional Tech */}
                <ServiceCard
                  title="Professional Tech"
                  price="₹29,499"
                  description="Growth-ready multi-page sites or simple apps"
                  features={[
                    "Multi-page website or simple mobile app",
                    "Backend integration & on-demand AI integration",
                    "3-month support & performance monitoring",
                    "SEO analytics & reporting",
                  ]}
                  buttonText="Start Project"
                  color="blue"
                  popular
                />

                {/* Enterprise Tech */}
                <ServiceCard
                  title="Enterprise Tech"
                  price="Custom"
                  description="Tailored, scalable solutions for large projects"
                  features={[
                    "Fully customized website or app",
                    "UI/UX design & scalable infrastructure",
                    "Integrated backend with advanced AI",
                    "SEO optimization & advanced analytics",
                    "Dedicated project manager & year-round support",
                  ]}
                  buttonText="Contact Sales"
                  color="purple"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Creative & Business Services */}
        <AnimatePresence mode="wait">
          {!showTechnical && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-bold text-white mt-12 mb-8 text-center">
                Creative & Business Services
              </h3>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
                {/* Starter Growth */}
                <ServiceCard
                  title="Starter Growth"
                  price="₹4,999"
                  description="Basic content and social media support"
                  features={[
                    "4 ghostwritten articles",
                    "Basic social media posting",
                    "Content calendar",
                  ]}
                  buttonText="Get Started"
                  color="gray"
                />

                {/* Professional Growth */}
                <ServiceCard
                  title="Professional Growth"
                  price="₹14,999"
                  description="For consistent growth and audience engagement"
                  features={[
                    "12 ghostwritten articles",
                    "Full social media management",
                    "Marketing strategy plan",
                    "Monthly analytics report",
                  ]}
                  buttonText="Start Campaign"
                  color="blue"
                  popular
                />

                {/* Enterprise Growth */}
                <ServiceCard
                  title="Enterprise Growth"
                  price="Custom Quote"
                  description="Complete creative & business growth package"
                  features={[
                    "Unlimited ghostwriting",
                    "Dedicated social media team",
                    "Brand strategy consulting",
                    "24/7 support",
                  ]}
                  buttonText="Contact Sales"
                  color="purple"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

/* Service Card Component (unchanged) */
const ServiceCard = ({
  title,
  price,
  description,
  features,
  buttonText,
  color,
  popular,
}: ServiceCardProps) => {
  const colorMap = {
    gray: "border-gray-800 bg-gray-900/50 hover:border-gray-700",
    blue: "border-2 border-blue-500 bg-gray-900/50 shadow-lg shadow-blue-500/20 hover:border-blue-400",
    purple:
      "border-gray-800 bg-gray-900/50 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/20",
  };

  return (
    <Container>
      <div
        className={`relative flex flex-col h-full rounded-xl border ${colorMap[color]} backdrop-blur-sm overflow-hidden transition-all`}
      >
        {popular && (
          <div className="absolute top-0 right-0 px-4 py-1 text-xs font-bold bg-blue-600 text-white rounded-bl-lg">
            MOST POPULAR
          </div>
        )}
        <div className="p-6 md:p-8">
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-bold text-white">{title}</h2>
            {color === "blue" && (
              <Zap className="h-5 w-5 text-yellow-400 fill-yellow-400" />
            )}
            {color === "purple" && (
              <Star className="h-5 w-5 text-purple-400 fill-purple-400" />
            )}
          </div>
          <div className="mt-4 flex items-end gap-2">
            <h3 className="text-3xl font-bold text-white">From {price}</h3>
          </div>
          <p className="mt-3 text-gray-300">{description}</p>
          <Button
            size="lg"
            className={`mt-6 w-full ${
              color === "blue"
                ? "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                : color === "purple"
                ? "bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700"
                : "bg-gray-800 hover:bg-gray-700"
            } text-white font-semibold`}
          >
            {buttonText}
          </Button>
          <div className="h-8 mt-3 w-full mx-auto">
            <AnimatePresence mode="wait">
              <motion.span
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="text-sm text-center text-gray-400 block"
              >
                One-time or milestone-based payments available
              </motion.span>
            </AnimatePresence>
          </div>
        </div>
        <div className="border-t border-gray-800 p-6 md:p-8 pt-0">
          <h4 className="text-lg font-medium text-white mb-4">Includes:</h4>
          <ul className="space-y-3">
            {features.map((feature: string, index: number) => (
              <li key={index} className="flex items-start">
                <CheckIcon
                  className={`h-5 w-5 ${
                    color === "blue"
                      ? "text-yellow-400"
                      : color === "purple"
                      ? "text-purple-400"
                      : "text-green-500"
                  } mt-0.5 flex-shrink-0`}
                />
                <span className="ml-3 text-gray-300">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default Pricing;