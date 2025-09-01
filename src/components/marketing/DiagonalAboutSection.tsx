import type * as React from "react";
import { cn } from "@/lib";
import Link from "next/link";

type TiltedAboutPanelProps = {
  className?: string;
  children?: React.ReactNode;
  // Amount of tilt at the top left in px. Top right stays at 0.
  topTiltPx?: number;
  // Amount of tilt at the bottom left in px. Bottom right stays at 0.
  bottomTiltPx?: number;
  // Optional max width for inner content
  contentWidthClassName?: string;
  fullBleed?: boolean;
};

/**
 * TiltedAboutPanel
 * White section whose top edge dips on the left and bottom edge dips on the right.
 * Achieved with CSS clip path so text remains perfectly horizontal.
 * Responsive by default using clamp so tilt scales with the viewport.
 *
 * Usage:
 *   <TiltedAboutPanel>
 *     <div className="grid gap-8 md:grid-cols-2">
 *       <div>left content</div>
 *       <div>right content</div>
 *     </div>
 *   </TiltedAboutPanel>
 */
export default function TiltedAboutPanel({
  className,
  children,
  topTiltPx,
  bottomTiltPx,
  contentWidthClassName = "max-w-7xl",
  fullBleed = true,
}: TiltedAboutPanelProps) {
  const topTilt = topTiltPx ?? 28;
  const bottomTilt = bottomTiltPx ?? 44;

  const style = {
    ["--top-tilt" as any]: `clamp(10px, ${topTilt / 16}vw, ${topTilt}px)`,
    ["--bottom-tilt" as any]: `clamp(14px, ${
      bottomTilt / 16
    }vw, ${bottomTilt}px)`,
    ["--clip" as any]:
      "polygon(0 var(--top-tilt), 100% 0, 100% 100%, 0 calc(100% - var(--bottom-tilt)))",
  } as React.CSSProperties;

  // Escaping any centered container the page might have.
  const Bleed = ({ children }: { children: React.ReactNode }) =>
    fullBleed ? (
      <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen">
        {children}
      </div>
    ) : (
      <>{children}</>
    );

  return (
    <Bleed>
      <section
        className={cn(
          "relative w-full bg-zinc-400 text-black isolate",
          "overflow-visible",
          className
        )}
        style={{
          clipPath: "var(--clip)",
          ...style,
        }}
        aria-label="About section"
      >
        <div
          className={cn(
            "mx-auto px-6 py-16 md:px-12 md:py-24",
            contentWidthClassName
          )}
        >
          {children ?? (
            <div className="grid items-start gap-10 md:grid-cols-2">
              <div className="space-y-6">
                <h2 className="text-pretty text-4xl font-semibold leading-tight md:text-6xl">
                  About
                  <br />
                  Our Agency
                </h2>
                <p className="text-xl md:text-2xl">
                  We Create We Innovate We Deliver
                </p>
              </div>
              <div className="space-y-8">
                <p className="text-balance text-base leading-7 text-neutral-900 md:text-lg">
                  We are a full stack creative agency that helps brands stand
                  out in the digital world. We build pixel perfect websites and
                  high impact apps. We run social media campaigns and write
                  content that converts. We produce video ads and craft graphic
                  design that people remember. Our team blends strategy
                  creativity and technology to make sure your brand is seen and
                  remembered.
                </p>
                <Link href={"/contact"}>
                  <button
                    type="button"
                    className="inline-flex h-12 mt-3 items-center justify-center rounded-full bg-black px-6 text-white transition-colors hover:bg-neutral-900"
                  >
                    Work With Us
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </Bleed>
  );
}
