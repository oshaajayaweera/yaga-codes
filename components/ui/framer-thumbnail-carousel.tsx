
"use client";
import React, { useEffect, useRef, useState } from 'react';
import {
  motion,
  useMotionValue,
  animate,
} from 'framer-motion';
import { X } from 'lucide-react';

export interface CarouselItem {
  id: number | string;
  url: string;
  title: string;
  isVideo?: boolean;
}

interface FramerThumbnailCarouselProps {
  items: CarouselItem[];
  initialIndex?: number;
  onClose?: () => void;
}

// Helper functions for Embeds
const isEmbed = (url: string) => {
  return url.includes("drive.google.com") || url.toLowerCase().endsWith(".pdf");
};

// Helper to get correct embed URL
const getEmbedUrl = (url: string) => {
  // For Google Drive, we use the preview link
  // For PDFs, we now use the direct URL to leverage native browser PDF viewing
  // which is more reliable than Google Docs Viewer for this use case
  return url;
};

// Individual Slide Component to manage Play/Pause state
const CarouselSlide = ({ item, isActive }: { item: CarouselItem, isActive: boolean }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Pause standard videos when slide becomes inactive
  useEffect(() => {
    if (!isActive && videoRef.current) {
      videoRef.current.pause();
    }
  }, [isActive]);

  if (item.isVideo) {
      if (isEmbed(item.url)) {
          // For iframes (Google Drive/PDF), only render when active.
          // Unmounting ensures video/audio stops immediately when navigating away.
          if (!isActive) return <div className="w-full h-full bg-black/50 animate-pulse" />; // Placeholder

          const isPdf = item.url.toLowerCase().endsWith(".pdf");

          return (
              <div className={`w-full h-full relative ${isPdf ? 'bg-zinc-900' : ''}`}>
                  <iframe 
                      src={getEmbedUrl(item.url)} 
                      className="w-full h-full border-0"
                      allow="autoplay; fullscreen"
                      title={item.title}
                  />
              </div>
          );
      } else {
          return (
              <video
                  ref={videoRef}
                  src={item.url}
                  controls
                  className='w-full h-full object-contain'
              />
          );
      }
  }

  return (
      <img
          src={item.url}
          alt={item.title}
          className='w-full h-full object-contain select-none pointer-events-none'
          draggable={false}
      />
  );
};

export function FramerThumbnailCarousel({ items, initialIndex = 0, onClose }: FramerThumbnailCarouselProps) {
  const [index, setIndex] = useState<number>(initialIndex);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const x = useMotionValue(0);

  // Update position on index change or resize
  useEffect(() => {
    if (!isDragging && containerRef.current) {
      const updatePosition = () => {
        const containerWidth = containerRef.current?.offsetWidth || 0;
        if (containerWidth > 0) {
            const targetX = -index * containerWidth;
            animate(x, targetX, {
                type: 'spring',
                stiffness: 300,
                damping: 30,
            });
        }
      };

      updatePosition();

      // Add resize observer to handle orientation changes or window resizing
      const observer = new ResizeObserver(() => {
          updatePosition();
      });
      observer.observe(containerRef.current);

      return () => observer.disconnect();
    }
  }, [index, x, isDragging]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'ArrowLeft') setIndex((i) => Math.max(0, i - 1));
        if (e.key === 'ArrowRight') setIndex((i) => Math.min(items.length - 1, i + 1));
        if (e.key === 'Escape' && onClose) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [items.length, onClose]);

  return (
    <div className='w-full h-full flex flex-col justify-center items-center relative py-2 md:py-8'>
      {onClose && (
        <button 
            onClick={onClose}
            className="absolute top-4 right-4 z-50 p-2 bg-black/50 hover:bg-black/80 text-white rounded-full transition-colors border border-white/10 backdrop-blur-md"
        >
            <X size={24} />
        </button>
      )}

      {/* Increased max-width to 90vw (was 6xl) for a wider view */}
      <div className='max-w-[90vw] w-full mx-auto px-0 md:px-4 flex flex-col gap-4 md:gap-6 h-full justify-center'>
        {/* Main Carousel */}
        <div 
          className='relative overflow-hidden rounded-lg w-full bg-zinc-900/50 flex-1 min-h-0 border border-white/5' 
          ref={containerRef}
          style={{ maxHeight: '80vh' }}
        >
          <motion.div
            className='flex h-full'
            drag={isEmbed(items[index]?.url || "") ? false : 'x'} // Disable drag for iframes to allow interaction
            dragElastic={0.2}
            dragMomentum={false}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={(e, info) => {
              setIsDragging(false);
              const containerWidth = containerRef.current?.offsetWidth || 1;
              const offset = info.offset.x;
              const velocity = info.velocity.x;

              let newIndex = index;

              // If fast swipe, use velocity
              if (Math.abs(velocity) > 500) {
                newIndex = velocity > 0 ? index - 1 : index + 1;
              }
              // Otherwise use offset threshold (30% of container width)
              else if (Math.abs(offset) > containerWidth * 0.3) {
                newIndex = offset > 0 ? index - 1 : index + 1;
              }

              // Clamp index
              newIndex = Math.max(0, Math.min(items.length - 1, newIndex));
              setIndex(newIndex);
            }}
            style={{ x }}
          >
            {items.map((item, i) => (
              // Removed padding to allow full bleed
              <div key={item.id} className='shrink-0 w-full h-full flex items-center justify-center bg-black'>
                <CarouselSlide item={item} isActive={index === i} />
              </div>
            ))}
          </motion.div>

          {/* Navigation Buttons - Visible over all types */}
          <motion.button
            disabled={index === 0}
            onClick={() => setIndex((i) => Math.max(0, i - 1))}
            className={`absolute left-2 md:left-4 text-black top-1/2 -translate-y-1/2 w-8 h-8 md:w-12 md:h-12 rounded-full flex items-center justify-center shadow-lg transition-transform z-20
              ${
                index === 0
                  ? 'opacity-0 pointer-events-none'
                  : 'bg-white/90 hover:scale-110 hover:bg-white opacity-100 backdrop-blur-sm'
              }`}
          >
            <svg
              className='w-5 h-5 md:w-6 md:h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M15 19l-7-7 7-7'
              />
            </svg>
          </motion.button>

          {/* Next Button */}
          <motion.button
            disabled={index === items.length - 1}
            onClick={() => setIndex((i) => Math.min(items.length - 1, i + 1))}
            className={`absolute text-black right-2 md:right-4 top-1/2 -translate-y-1/2 w-8 h-8 md:w-12 md:h-12 rounded-full flex items-center justify-center shadow-lg transition-transform z-20
              ${
                index === items.length - 1
                  ? 'opacity-0 pointer-events-none'
                  : 'bg-white/90 hover:scale-110 hover:bg-white opacity-100 backdrop-blur-sm'
              }`}
          >
            <svg
              className='w-5 h-5 md:w-6 md:h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M9 5l7 7-7 7'
              />
            </svg>
          </motion.button>
          
          {/* Title Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent pointer-events-none z-10">
             <h3 className="text-white text-lg md:text-xl font-bold tracking-tight">{items[index]?.title}</h3>
          </div>
        </div>

        <Thumbnails items={items} index={index} setIndex={setIndex} />
      </div>
    </div>
  );
}

function Thumbnails({
  items,
  index,
  setIndex,
}: {
  items: CarouselItem[];
  index: number;
  setIndex: (index: number) => void;
}) {
  const thumbnailsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (thumbnailsRef.current) {
      const container = thumbnailsRef.current;
      const activeBtn = container.querySelector(`button[data-index="${index}"]`) as HTMLElement;
      
      if (activeBtn) {
        activeBtn.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center'
        });
      }
    }
  }, [index]);

  return (
    <div
      ref={thumbnailsRef}
      className='overflow-x-auto scrollbar-hide w-full max-w-[95vw] mx-auto px-2'
      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
    >
      <div className='flex gap-2 md:gap-3 h-14 md:h-20 pb-2 mx-auto w-fit min-w-full md:min-w-0 justify-center md:justify-start'>
        {items.map((item, i) => (
          <button
            key={item.id}
            data-index={i}
            onClick={() => setIndex(i)}
            className={`
                relative shrink-0 h-full aspect-[4/3] rounded-md overflow-hidden transition-all duration-300 ease-out cursor-pointer border border-white/10
                ${i === index 
                    ? 'opacity-100 ring-2 ring-white scale-105 z-10' 
                    : 'opacity-40 hover:opacity-80 grayscale hover:grayscale-0'}
            `}
          >
            {item.isVideo ? (
               <div className="w-full h-full bg-zinc-800 flex items-center justify-center">
                 <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-white border-b-[6px] border-b-transparent ml-1"></div>
                 {item.url.toLowerCase().endsWith('.pdf') && <span className="absolute bottom-1 right-1 text-[8px] bg-black/50 px-1 rounded text-white">PDF</span>}
               </div>
            ) : (
                <img
                src={item.url}
                alt={item.title}
                className='w-full h-full object-cover select-none pointer-events-none'
                />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
