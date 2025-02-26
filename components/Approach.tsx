/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/CanvasRevealEffect";
import Image from "next/image";

const Approach = () => {
  return (
    <div className="py-20">
      <h1 className="heading">
        Some of my <span className="text-purple">Achievements</span>
      </h1>
      <div className="py-20 flex flex-col lg:flex-row items-center justify-center bg-white dark:bg-black w-full gap-4 mx-auto px-8">
        <Card
          title="AWS SAA Certification"
          icon={<AceternityIcon order="AWS" />}
          badge="/SAA.png"
          description="I have completed the AWS Certified Solutions Architect - Associate certification."
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900"
          />
        </Card>
        <Card
          title="Intershala Certification"
          icon={<AceternityIcon order="Internshala" />}
          badge="/internshala_logo.jpg"
          description="I have completed the Internshala Training on Web Development."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            dotSize={2}
          />
          {/* Radial gradient for the cute fade */}
          <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
        </Card>
        <Card
          title="Open University Certification"
          icon={<AceternityIcon order="Google" />}
          badge="/theopenuniversity_logo.jpg"
          description="I have completed the Open University Certification for the digital Marketing."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
    </div>
  );
};

const Card = ({
  title,
  icon,
  children,
  badge,
  description,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  badge: string;
  description?: string;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative h-[10rem] md:h-[30rem]"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 flex flex-col items-center justify-center">
        {/* Icon */}
        <div className="text-center transition-transform duration-200 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0">
          {icon}
        </div>

        {/* Image & Text Container */}
        <div className="relative flex flex-col items-center justify-center">
          {/* Image */}
          <Image
            src={badge || "/SAA.png"}
            alt={"title"}
            width={200}
            height={200}
            className="opacity-0 group-hover/canvas-card:opacity-100 transform scale-100 group-hover/canvas-card:scale-110 transition-all duration-200  group-hover/canvas-card:-translate-y-4 hidden md:block"
          />

          {/* Title */}
          <h2 className="text-black text-md md:text-2xl dark:text-white font-bold mt-4 opacity-0 group-hover/canvas-card:opacity-100 group-hover/canvas-card:-translate-y-2 transition duration-200 text-center">
            {title}
          </h2>

          {/* Description */}
          <h2 className="text-xs md:text-sm text-black dark:text-white font-bold mt-2 opacity-0 group-hover/canvas-card:opacity-100 group-hover/canvas-card:-translate-y-2 transition duration-200 text-center" style={{ color: "#ec1ff" }}>
            {description}
          </h2>
        </div>
      </div>
    </div>
  );
};

const AceternityIcon = ({ order }: { order: string }) => {
  return (
    <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
        {order}
      </span>
    </button>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

export default Approach;
