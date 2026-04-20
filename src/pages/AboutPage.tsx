import React from 'react';
import BentoGrid, { Feature } from '@/components/ui/bento-monochrome';
import { Timeline } from '@/components/ui/timeline';
import { Eye, Tag as TagIcon, Zap, MapPin, PenTool, Users, Star, Layers, Heart } from "lucide-react";
import { motion } from 'framer-motion';
import { SEO } from '@/components/seo';

export default function AboutPage() {
  const careerJourneyData = [
    {
      title: "2022 – Present",
      content: (
        <div>
          <h4 className="text-foreground text-lg font-bold mb-2">Freelance Digital Marketer</h4>
          <p className="text-muted-foreground text-sm leading-relaxed mb-8">
            Helping brands grow online through strategy, campaigns, and creative visuals.
          </p>
        </div>
      ),
    },
    {
      title: "Oct 2024 – June 2025",
      content: (
        <div>
          <h4 className="text-foreground text-lg font-bold mb-2">Digital Marketer, Ever Efficient Business Management Private Limited</h4>
          <p className="text-muted-foreground text-sm leading-relaxed mb-8">
            Driving digital campaigns and optimizing marketing performance.
          </p>
        </div>
      ),
    },
    {
      title: "Aug 2025 – Present",
      content: (
        <div>
          <h4 className="text-foreground text-lg font-bold mb-2">Digital Marketing Executive, Treinetic Private Limited</h4>
          <p className="text-muted-foreground text-sm leading-relaxed mb-8">
            Executing digital strategies and creating impactful content for brand growth.
          </p>
        </div>
      ),
    },
  ];

  const educationJourneyData = [
    {
      title: "Oct 2022 – Oct 2023",
      content: (
        <div>
          <h4 className="text-foreground text-lg font-bold mb-2">Diploma in Business Information Systems</h4>
          <p className="text-muted-foreground/60 text-xs uppercase tracking-widest mb-2">National Institute of Business Management</p>
          <p className="text-muted-foreground text-sm leading-relaxed mb-8">
            Laying the foundation for business and technology integration.
          </p>
        </div>
      ),
    },
    {
      title: "Nov 2023 – Nov 2024",
      content: (
        <div>
          <h4 className="text-foreground text-lg font-bold mb-2">Higher National Diploma in Information Technology for Business</h4>
          <p className="text-muted-foreground/60 text-xs uppercase tracking-widest mb-2">National Institute of Business Management</p>
          <p className="text-muted-foreground text-sm leading-relaxed mb-8">
            Deepening IT skills with a business-focused approach.
          </p>
        </div>
      ),
    },
    {
      title: "Oct 2025 – Present",
      content: (
        <div>
          <h4 className="text-foreground text-lg font-bold mb-2">BSc. (Hons) in Information Technology</h4>
          <p className="text-muted-foreground/60 text-xs uppercase tracking-widest mb-2">University of West London</p>
          <p className="text-muted-foreground text-sm leading-relaxed mb-8">
            Expanding expertise to global standards and advanced IT solutions.
          </p>
        </div>
      ),
    },
  ];

  // Expertise Features Data
  const expertiseFeatures: Feature[] = [
    {
      title: "Making brands visible",
      blurb: "Strategic positioning and comprehensive digital presence to ensure your brand is seen by the right audience at the right time.",
      meta: "Strategy",
      icon: Eye,
    },
    {
      title: "Shaping standout brands",
      blurb: "Crafting unique brand identities that cut through the noise, resonating deeply with users.",
      meta: "Design",
      icon: TagIcon,
    },
    {
      title: "Creating impact",
      blurb: "Driving measurable results through data-backed campaigns and engaging content.",
      meta: "Growth",
      icon: Zap,
    },
    {
      title: "Defining presence",
      blurb: "Establishing a strong, consistent digital footprint across all platforms to build authority and trust.",
      meta: "Branding",
      icon: MapPin,
    },
    {
      title: "Designing visibility",
      blurb: "Visual storytelling and creative direction that captures attention and communicates value instantly.",
      meta: "Art Dir",
      icon: PenTool,
    },
  ];

  // Volunteering Features Data for Bento Grid
  const volunteeringFeatures: Feature[] = [
    {
        title: "STEMUP Education",
        blurb: "Teaching STEM subjects to students and leading events with marketing, social media, and creative design contributions.",
        meta: "Lead",
        icon: Users,
    },
    {
        title: "Coolest Project",
        blurb: "Organized and marketed the event, designed social media and print materials, and drove student engagement campaigns.",
        meta: "Event",
        icon: Star,
    },
    {
        title: "NIBM IT Society",
        blurb: "Managed social media pages, visual content, printed materials, and lead the CY–BOT Robotic event marketing side.",
        meta: "Exec",
        icon: Layers,
    },
    {
        title: "NIBM Zero Plastic",
        blurb: "Handled social media campaigns, creative visuals, and printed materials to drive awareness and engagement.",
        meta: "Editor",
        icon: Heart,
    }
  ];

  const volunteeringSpans = [
      "md:col-span-3 md:row-span-1",
      "md:col-span-3 md:row-span-1",
      "md:col-span-3 md:row-span-1",
      "md:col-span-3 md:row-span-1"
  ];

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Oshadha Jayaweera",
    "url": "https://oshadha.me",
    "image": "https://fmhljevqveocnxcyvwyx.supabase.co/storage/v1/object/public/images/m/IMG_3713.jpg",
    "jobTitle": "Digital Marketer & Strategist",
    "description": "Sri Lankan digital marketer and creative specialist focused on building digital presence.",
    "sameAs": [
        "https://www.instagram.com/oshaa_jay",
        "https://www.linkedin.com/in/oshadhajayaweera",
        "https://www.tiktok.com/@thekiriya",
        "https://www.youtube.com/@oshadhajay",
        "https://www.facebook.com/oshaajay"
    ]
  };

  return (
    <main className="min-h-screen w-full bg-background pt-40 md:pt-48 px-0 pb-0">
        <SEO 
            title="About Oshadha Jayaweera - Digital Strategist & Creator"
            description="Learn about Oshadha Jayaweera, a digital strategist and visual creator in Sri Lanka. Experience in content planning, design, and performance marketing."
            keywords={["About Oshadha", "Digital Marketer Biography", "Sri Lankan Creator", "Oshadha Jayaweera Profile"]}
            image="https://fmhljevqveocnxcyvwyx.supabase.co/storage/v1/object/public/images/m/IMG_3713.jpg"
            type="profile"
            schema={personSchema}
        />
        {/* About Me Hero Section - Redesigned */}
        <div className="relative w-full max-w-7xl mx-auto px-6 md:px-12 pt-0 pb-20">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                 <div className="order-2 lg:order-1 space-y-8">
                     <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-foreground mb-6">
                             About <span className="text-foreground/40">Me</span>
                          </h1>
                          <div className="h-0.5 w-24 bg-gradient-to-r from-foreground to-transparent mb-8"></div>
                          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
                             Focused on building strong digital presence through strategy, creativity, and execution. 
                             Skilled in planning campaigns, shaping content direction, and understanding how audiences think. 
                             Experience across design, photography, videography, and editing brings each idea to life with clarity and emotion. 
                             Committed to creating work that feels modern, authentic, and built for performance.
                          </p>
                     </motion.div>
                 </div>
                 <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
                     <motion.div 
                         initial={{ opacity: 0, scale: 0.9 }} 
                         animate={{ opacity: 1, scale: 1 }} 
                         transition={{ duration: 0.6, delay: 0.2 }}
                         className="relative w-72 h-72 md:w-96 md:h-96"
                     >
                         <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/10 via-purple-500/10 to-transparent rounded-full blur-3xl opacity-50"></div>
                         <div className="relative w-full h-full rounded-2xl overflow-hidden border border-foreground/5 shadow-2xl bg-card transition-all duration-700 hover:scale-[1.02] hover:shadow-foreground/5">
                             <img 
                                 src="https://fmhljevqveocnxcyvwyx.supabase.co/storage/v1/object/public/images/m/IMG_3713.jpg" 
                                 alt="Oshadha Jayaweera - Digital Marketer Profile" 
                                 className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
                             />
                             <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60"></div>
                         </div>
                     </motion.div>
                 </div>
             </div>
        </div>

        {/* Expertise Section - New Design */}
        <BentoGrid 
            title="Expertise" 
            subtitle="A breakdown of skills focusing on strategy, design, and high-performance digital presence."
            features={expertiseFeatures}
            footerText="Precision in every pixel."
        />

        {/* Career Journey Timeline */}
        <section className="w-full border-b border-border bg-card/20">
            <Timeline 
                data={careerJourneyData} 
                title="Career Journey" 
                description="A timeline of my professional roles and impact in the digital marketing space."
            />
        </section>

         {/* Education Journey Timeline - Flipped Alignment */}
        <section className="w-full">
            <Timeline 
                data={educationJourneyData} 
                title="Education Journey" 
                description="My academic path in Information Technology and Business Systems."
                alignment="right" 
            />
        </section>

        {/* Volunteer & Leadership Section - Redesigned with Bento Grid */}
        <BentoGrid 
            title="Volunteer & Leadership"
            subtitle="Contributing to communities and leading initiatives that empower growth and innovation."
            tagline="Community"
            features={volunteeringFeatures}
            spans={volunteeringSpans}
            footerText="Building communities together."
            className="border-t border-border"
        />
    </main>
  );
};