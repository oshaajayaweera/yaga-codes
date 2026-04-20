import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import VaporizeTextCycle, { Tag } from '@/components/ui/vapour-text-effect';
import SphereImageGrid from '@/components/ui/img-sphere';
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';
import { SEO } from '@/components/seo';
import { useTheme } from '@/components/theme-provider';
import { SPHERE_IMAGES, SPHERE_CONFIG } from '@/data/playground';

export default function HomePage() {
    const navigate = useNavigate();
    const location = useLocation();
    const [containerSize, setContainerSize] = useState(600);
    const [fontSize, setFontSize] = useState("110px");
    const { theme } = useTheme();

    // Handle scroll to hash on mount or change
    useEffect(() => {
        if (location.hash) {
            const id = location.hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) element.scrollIntoView({ behavior: 'smooth' });
        }
    }, [location]);

    useEffect(() => {
        const updateSize = () => {
            const width = Math.min(window.innerWidth - 48, 600); // Increased margin for mobile safety
            setContainerSize(width);
            
             // Responsive font size for the rotating text - Increased mobile size as requested
            if (window.innerWidth < 640) {
                 setFontSize("48px");
            } else if (window.innerWidth < 1024) {
                 setFontSize("80px");
            } else {
                 setFontSize("120px");
            }
        };
        updateSize();
        window.addEventListener('resize', updateSize);
        return () => window.removeEventListener('resize', updateSize);
    }, []);

    const schema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Oshadha Jayaweera Portfolio",
        "url": "https://oshadha.me",
        "description": "Portfolio of Oshadha Jayaweera, a digital strategist and creative specialist in Sri Lanka.",
        "author": {
            "@type": "Person",
            "name": "Oshadha Jayaweera"
        },
        "publisher": {
            "@type": "Person",
            "name": "Oshadha Jayaweera"
        }
    };

    return (
        <main className="relative w-full">
            <SEO 
                title="Oshadha Jayaweera - Digital Marketer & Content Creator Sri Lanka"
                description="Oshadha Jayaweera is a Sri Lankan digital marketer and creative specialist focused on building digital presence through strategy visual communication and performance content."
                keywords={["Digital Marketer Sri Lanka", "Content Creator", "Strategy", "Visuals", "Portfolio"]}
                schema={schema}
            />
            {/* Hero Section */}
            <section id="hero" className="min-h-screen w-full relative flex flex-col items-center justify-center overflow-hidden pb-32 pt-60 md:pt-80">
                 
                 {/* Text Content */}
                 <div className="z-20 text-center space-y-8 max-w-7xl px-6 mb-12 flex flex-col items-center">
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-3xl md:text-7xl lg:text-8xl font-bold tracking-wider text-foreground leading-tight mb-2 md:mb-4 text-center px-4 whitespace-nowrap"
                    >
                        Oshadha Jayaweera
                    </motion.h1>
                    
                    <div className="h-[60px] md:h-[130px] w-full flex items-center justify-center mt-4">
                         <VaporizeTextCycle
                            texts={["Strategy", "Creativity", "Visuals"]}
                            font={{
                                fontFamily: "Inter, sans-serif",
                                fontSize: fontSize,
                                fontWeight: 600
                            }}
                            color={theme === 'light' ? "rgb(0, 0, 0)" : "rgb(255, 255, 255)"}
                            tag={Tag.H2}
                            density={4}
                            animation={{
                                vaporizeDuration: 1.5,
                                fadeInDuration: 0.5,
                                waitDuration: 2.0
                            }}
                        />
                    </div>

                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="text-muted-foreground text-lg md:text-xl max-w-5xl mx-auto leading-relaxed pt-8"
                    >
                        Building digital presence with a mix of strategic planning, creative direction, and performance focused content. Every piece is shaped to strengthen brand identity, drive engagement, and deliver measurable results across modern platforms.
                    </motion.p>

                    {/* New Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
                    >
                        <Button
                            onClick={() => navigate('/work')}
                            className="rounded-full bg-foreground text-background hover:bg-foreground/80 px-8 py-6 text-base font-semibold tracking-wide transition-all hover:scale-105 min-w-[160px]"
                        >
                            View Work
                        </Button>
                        <Button
                            variant="outline"
                            onClick={() => navigate('/contact')}
                            className="rounded-full border-foreground/20 bg-transparent text-foreground hover:bg-foreground/10 hover:text-foreground px-8 py-6 text-base font-medium tracking-wide transition-all hover:scale-105 backdrop-blur-sm min-w-[160px]"
                        >
                            Contact Me
                        </Button>
                    </motion.div>
                </div>
                
                {/* 3D Sphere Showcase - Moved to Home */}
                <div className="w-full flex flex-col items-center justify-center relative z-10">
                    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-foreground/20 to-transparent"></div>
                    
                    <div className="text-center mt-12 mb-12">
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-foreground/90">Selected Works</h2>
                    </div>

                    <div className="relative">
                        <SphereImageGrid 
                            images={SPHERE_IMAGES} 
                            containerSize={containerSize}
                            sphereRadius={containerSize < 600 ? containerSize * 0.35 : 200} // Reduced radius for better mobile fit
                            {...SPHERE_CONFIG} 
                        />
                    </div>
                    <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-foreground/20 to-transparent"></div>
                </div>
            </section>
        </main>
    );
};