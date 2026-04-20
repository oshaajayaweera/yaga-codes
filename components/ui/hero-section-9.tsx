
import { motion, Variants } from 'framer-motion';
import { Button, type ButtonProps } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import React from 'react';

// Define the props for reusability
interface StatProps {
  value: string;
  label: string;
  icon: React.ReactNode;
}

interface ActionProps {
  text: string;
  onClick: () => void;
  variant?: ButtonProps['variant'];
  className?: string;
}

interface HeroSectionProps {
  title: React.ReactNode;
  subtitle: string;
  actions: ActionProps[];
  stats: StatProps[];
  images: string[];
  className?: string;
}

// Animation variants for Framer Motion
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

const floatingVariants: Variants = {
  animate: {
    y: [0, -8, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

const HeroSection: React.FC<HeroSectionProps> = ({ title, subtitle, actions, stats, images, className }) => {
  return (
    <section className={cn('w-full overflow-hidden bg-background py-8 sm:py-24 border-b border-white/5', className)}>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-start gap-12 px-6 md:px-12">
        {/* Left Column: Text Content */}
        <motion.div
          className="flex flex-col items-start text-left order-2 md:order-1"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h1
            className="text-2xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
            variants={itemVariants}
          >
            {title}
          </motion.h1>
          <motion.p className="mt-4 sm:mt-6 max-w-xl text-sm sm:text-lg text-muted-foreground leading-relaxed" variants={itemVariants}>
            {subtitle}
          </motion.p>
          <motion.div className="mt-6 sm:mt-8 flex flex-wrap justify-start gap-3 lg:justify-start" variants={itemVariants}>
            {actions.map((action, index) => (
              <Button 
                key={index} 
                onClick={action.onClick} 
                variant={action.variant} 
                className={cn("h-9 px-4 text-xs sm:h-11 sm:px-8 sm:text-sm", action.className)}
              >
                {action.text}
              </Button>
            ))}
          </motion.div>
          <motion.div className="mt-8 sm:mt-12 flex flex-wrap justify-start gap-4 sm:gap-8 lg:justify-start border-t border-white/10 pt-6 sm:pt-8 w-full" variants={itemVariants}>
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 shrink-0">
                   <div className="scale-90 sm:scale-100 origin-center flex items-center justify-center">
                      {stat.icon}
                   </div>
                </div>
                <div>
                  <p className="text-sm sm:text-lg font-bold text-foreground">{stat.value}</p>
                  <p className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Column: Image Collage */}
        <motion.div
          className="relative h-[230px] w-full sm:h-[500px] order-1 md:order-2 mb-8 md:mb-0"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Decorative Shapes */}
          <motion.div
            className="absolute -top-4 left-1/4 h-16 w-16 rounded-full bg-blue-500/20 blur-xl hidden sm:block"
            variants={floatingVariants}
            animate="animate"
          />
          <motion.div
            className="absolute bottom-0 right-1/4 h-12 w-12 rounded-lg bg-purple-500/20 blur-xl hidden sm:block"
            variants={floatingVariants}
            animate="animate"
            style={{ transitionDelay: '0.5s' }}
          />

          {/* Images */}
          <motion.div
            className="absolute left-1/2 top-0 h-32 w-32 -translate-x-1/2 rounded-xl bg-white/5 p-1.5 shadow-2xl border border-white/10 sm:h-64 sm:w-64 sm:rounded-2xl sm:p-2 z-20"
            style={{ transformOrigin: 'bottom center' }}
            variants={imageVariants}
          >
            <img src={images[0]} alt="Blog main" className="h-full w-full rounded-lg sm:rounded-xl object-cover" />
          </motion.div>
          <motion.div
            className="absolute right-4 top-10 sm:right-4 sm:top-1/3 h-28 w-28 rounded-xl bg-white/5 p-1.5 shadow-2xl border border-white/10 sm:h-56 sm:w-56 sm:rounded-2xl sm:p-2 z-10"
            style={{ transformOrigin: 'left center' }}
            variants={imageVariants}
          >
            <img src={images[1]} alt="Blog secondary" className="h-full w-full rounded-lg sm:rounded-xl object-cover opacity-80" />
          </motion.div>
          <motion.div
            className="absolute bottom-0 left-4 sm:left-4 h-24 w-24 rounded-xl bg-white/5 p-1.5 shadow-2xl border border-white/10 sm:h-48 sm:w-48 sm:rounded-2xl sm:p-2 z-30"
            style={{ transformOrigin: 'top right' }}
            variants={imageVariants}
          >
            <img src={images[2]} alt="Blog tertiary" className="h-full w-full rounded-lg sm:rounded-xl object-cover" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
