
"use client";
import {
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

interface TimelineProps {
  data: TimelineEntry[];
  title?: string;
  description?: string;
  alignment?: "left" | "right";
}

export const Timeline = ({ data, title, description, alignment = "left" }: TimelineProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  const isRight = alignment === "right";

  return (
    <div
      className="w-full bg-background font-sans md:px-10"
      ref={containerRef}
    >
      <div className={cn("max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10", isRight && "text-right")}>
        <h2 className={cn("text-3xl md:text-5xl mb-4 text-foreground max-w-4xl font-black tracking-tight", isRight && "ml-auto")}>
          {title || "Changelog from my journey"}
        </h2>
        <p className={cn("text-muted-foreground text-sm md:text-base max-w-sm", isRight && "ml-auto")}>
          {description || "Here is a timeline of my professional journey."}
        </p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className={cn(
                "flex justify-start pt-10 md:pt-40 md:gap-10", 
                isRight ? "flex-row-reverse" : ""
            )}
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className={cn(
                  "h-10 absolute w-10 rounded-full bg-card flex items-center justify-center border border-border",
                  isRight ? "right-3 left-auto" : "left-3"
              )}>
                <div className="h-4 w-4 rounded-full bg-foreground border border-muted p-2" />
              </div>
              <h3 className={cn(
                  "hidden md:block text-xl md:text-5xl font-bold text-muted-foreground/50",
                  isRight ? "pr-20 text-right w-full" : "pl-20 text-left"
              )}>
                {item.title}
              </h3>
            </div>

            <div className={cn(
                "relative w-full",
                isRight ? "pr-20 pl-4 text-right" : "pl-20 pr-4 text-left"
            )}>
              <h3 className={cn(
                  "md:hidden block text-2xl mb-4 font-bold text-muted-foreground",
                  isRight && "text-right"
              )}>
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className={cn(
              "absolute top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-muted to-transparent to-[99%]",
              isRight ? "right-8 left-auto" : "left-8"
          )}
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
