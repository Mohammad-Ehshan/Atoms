import { BellIcon, CalendarIcon, FileTextIcon, Share2Icon } from "lucide-react";

import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib";
import { AnimatedBeamMultipleOutputDemo } from "../magicui/AnimatedBeamMultipleOutputDemo";
import { AnimatedListDemo } from "../magicui/AnimatedListDemo";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { Marquee } from "../magicui/marquee";

const projects = [
  {
    name: "E-Commerce Website",
    body: "Built a scalable store with seamless checkout and lightning-fast performance.",
  },
  {
    name: "Social Media Campaign",
    body: "Increased brand engagement by 300% with creative posts & reels.",
  },
  {
    name: "Mobile App",
    body: "Delivered a feature-rich app with smooth UX and modern design.",
  },
  {
    name: "Video Ad",
    body: "Produced high-converting ad campaigns viewed by millions worldwide.",
  },
  {
    name: "Logo Design",
    body: "Crafted unique brand identities that stand out in crowded markets.",
  },
];

const features = [
  {
    Icon: FileTextIcon,
    name: "Creative Projects",
    description:
      "From websites to viral campaigns, we deliver bold ideas that drive results.",
    href: "#",
    cta: "See Our Work",
    className: "col-span-3 lg:col-span-1",
    background: (
      <Marquee
        pauseOnHover
        className="absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] "
      >
        {projects.map((p, idx) => (
          <figure
            key={idx}
            className={cn(
              "relative w-40 cursor-pointer overflow-hidden rounded-xl border p-4",
              "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
              "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
              "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none"
            )}
          >
            <div className="flex flex-row items-center gap-2">
              <div className="flex flex-col">
                <figcaption className="text-sm font-medium dark:text-white ">
                  {p.name}
                </figcaption>
              </div>
            </div>
            <blockquote className="mt-2 text-xs">{p.body}</blockquote>
          </figure>
        ))}
      </Marquee>
    ),
  },
  {
    Icon: BellIcon,
    name: "Always On Trend",
    description:
      "We stay ahead of algorithms, design trends, and audience behavior so you don’t have to.",
    href: "#",
    cta: "Discover More",
    className: "col-span-3 lg:col-span-2",
    background: (
      <AnimatedListDemo className="absolute right-2 top-4 h-[300px] w-full scale-75 border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-90" />
    ),
  },
  {
    Icon: Share2Icon,
    name: "Seamless Integrations",
    description:
      "Websites, apps, content, and social media — all synced to amplify your brand.",
    href: "#",
    cta: "Explore Services",
    className: "col-span-3 lg:col-span-2",
    background: (
      <AnimatedBeamMultipleOutputDemo className="absolute right-2 top-4 h-[300px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
    ),
  },
  {
    Icon: CalendarIcon,
    name: "On-Time Delivery",
    description:
      "Deadlines aren't goals — they're promises. We launch when we say we will.",
    className: "col-span-3 lg:col-span-1",
    href: "#",
    cta: "Work With Us",
    background: (
      <Calendar
        mode="single"
        selected={new Date(2025, 0, 1, 0, 0, 0)}
        className="absolute right-0 top-10 origin-top scale-75 rounded-md border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-90"
      />
    ),
  },
];

export function BentoDemo() {
  return (
    <BentoGrid>
      {features.map((feature, idx) => (
        <BentoCard key={idx} {...feature} />
      ))}
    </BentoGrid>
  );
}
