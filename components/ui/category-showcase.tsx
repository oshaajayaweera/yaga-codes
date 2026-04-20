
"use client";

import { ArrowLeft, ArrowRight, Info } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type ProjectItem = {
  title: string;
  description: string;
  src: string;
  isVideo?: boolean;
};

export const CategoryShowcase = ({
  categoryTitle,
  items,
  autoplay = false,
  className,
  onItemClick
}: {
  categoryTitle: string;
  items: ProjectItem[];
  autoplay?: boolean;
  className?: string;
  onItemClick?: (index: number) => void;
}) => {
  const [active, setActive] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setActive((prev) => (prev + 1) % items.length);
  };

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setActive((prev) => (prev - 1 + items.length) % items.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay && !isHovering) {
      const interval = setInterval(() => setActive((prev) => (prev + 1) % items.length), 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay, isHovering, items.length]);

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };

  // Helper to check if content should be embedded in an iframe (Google Drive video or PDF)
  const isEmbed = (src: string) => {
    return src.includes("drive.google.com") || src.toLowerCase().endsWith(".pdf");
  };

  // Helper to get correct embed URL
  const getEmbedUrl = (src: string) => {
    // Return direct URL for everything now to use native browser capabilities
    return src;
  };

  return (
    <div className={cn("w-full", className)}>
      <div 
        className="relative mx-auto h-[250px] w-full group" 
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <AnimatePresence mode="popLayout">
          {items.map((item, index) => (
            <motion.div
              key={`${categoryTitle}-${index}`}
              initial={{
                opacity: 0,
                scale: 0.9,
                z: -100,
                rotate: randomRotateY(),
              }}
              animate={{
                opacity: isActive(index) ? 1 : 0, // Fade out inactive items to avoid z-index/rendering issues
                scale: isActive(index) ? 1 : 0.9,
                z: isActive(index) ? 0 : -100,
                rotate: isActive(index) ? 0 : randomRotateY(),
                zIndex: isActive(index)
                  ? 40 
                  : items.length + 2 - index,
                y: isActive(index) ? [0, -40, 0] : 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.9,
                z: 100,
                rotate: randomRotateY(),
              }}
              transition={{
                duration: 0.4,
                ease: "easeInOut",
              }}
              className="absolute inset-0 origin-bottom cursor-pointer"
              onClick={() => onItemClick && onItemClick(index)}
              style={{ pointerEvents: isActive(index) ? 'auto' : 'none' }} // Ensure only active item captures clicks
            >
              <div className="relative h-full w-full rounded-2xl overflow-hidden bg-black border border-white/10">
                {item.isVideo ? (
                   isEmbed(item.src) ? (
                        <iframe 
                            src={getEmbedUrl(item.src)}
                            className="h-full w-full object-cover pointer-events-none"
                            title={item.title}
                            allowFullScreen={false}
                        />
                   ) : (
                       <video
                         src={item.src}
                         className="h-full w-full object-cover"
                         muted
                         loop
                         playsInline
                         autoPlay={isActive(index)}
                       />
                   )
                ) : (
                  <img
                    src={item.src}
                    alt={item.title}
                    draggable={false}
                    className="h-full w-full object-cover object-center"
                  />
                )}
                
                {/* Overlay Text on Hover/Active */}
                <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ 
                        opacity: isHovering && isActive(index) ? 1 : 0,
                        y: isHovering && isActive(index) ? 0 : 10
                    }}
                    transition={{ duration: 0.3 }}
                    className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 via-black/60 to-transparent backdrop-blur-[1px] pb-12"
                >
                    <h4 className="text-lg font-bold text-white truncate pr-16">{item.title}</h4>
                </motion.div>

                {/* Hint indicator when not hovering */}
                 <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: !isHovering && isActive(index) ? 1 : 0 }}
                    className="absolute top-4 right-4 bg-black/50 backdrop-blur-md rounded-full p-1.5 border border-white/10"
                >
                    <Info size={14} className="text-white/70" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Navigation Buttons Inside Container at Bottom Right */}
        <div className="absolute bottom-2 right-2 flex gap-2 z-[60]">
            <button
              onClick={handlePrev}
              className="h-8 w-8 rounded-full bg-black/60 border border-white/20 backdrop-blur-md flex items-center justify-center group/button hover:bg-black/90 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 text-white group-hover/button:rotate-12 transition-transform duration-300" />
            </button>
            <button
              onClick={handleNext}
              className="h-8 w-8 rounded-full bg-black/60 border border-white/20 backdrop-blur-md flex items-center justify-center group/button hover:bg-black/90 transition-colors"
            >
              <ArrowRight className="h-4 w-4 text-white group-hover/button:-rotate-12 transition-transform duration-300" />
            </button>
        </div>

      </div>
    </div>
  );
};
