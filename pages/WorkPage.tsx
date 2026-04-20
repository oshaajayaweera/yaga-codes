import React, { useState, useEffect } from 'react';
import { CategoryShowcase } from '@/components/ui/category-showcase';
import { FramerThumbnailCarousel, CarouselItem } from '@/components/ui/framer-thumbnail-carousel';
import { AnimatePresence, motion } from 'framer-motion';
import { SEO } from '@/components/seo';
import { playgroundData } from '@/data/playground';

export default function WorkPage() {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [startIndex, setStartIndex] = useState(0);

    const openModal = (category: string, index: number) => {
        setSelectedCategory(category);
        setStartIndex(index);
        setModalOpen(true);
    };

    const getCategoryItems = (category: string): CarouselItem[] => {
        // Map the existing playground data to carousel items structure
        // In a real app, you might want to fetch higher res images or a different set
        const items = playgroundData[category as keyof typeof playgroundData] || [];
        return items.map((item, i) => ({
            id: i,
            url: item.src,
            title: item.title,
            isVideo: item.isVideo
        }));
    };

    // Manage body scroll lock when modal is open
    useEffect(() => {
        if (modalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [modalOpen]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen w-full bg-background pt-36 px-6 md:px-20 pb-32">
            <SEO 
                title="Work Portfolio - Oshadha Jayaweera"
                description="Explore my portfolio of wildlife photography, event coverage, graphic design, and marketing campaigns."
                keywords={["Portfolio", "Photography", "Videography", "Flyer Design", "Graphic Design"]}
            />
             {/* My Playground Section */}
             <div className="w-full mb-12">
                 <div className="text-center mb-16">
                     <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/50 pb-2">My Playground</h2>
                     <p className="text-muted-foreground max-w-2xl mx-auto">
                        Hover over cards to see details. Click to view gallery.
                     </p>
                 </div>

                 <div className="space-y-32">
                    
                    {/* Wildlife Photography */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center border-t border-border pt-16">
                        <div className="md:col-span-4 space-y-4">
                            <h3 className="text-3xl font-bold text-foreground">Wildlife Photography</h3>
                            <p className="text-muted-foreground leading-relaxed text-sm">
                                Exploring nature's untamed beauty. From the vibrant kingfishers to playful monkeys and squirrels in their natural habitat.
                            </p>
                            <div className="flex flex-wrap gap-2 pt-2">
                                <span className="px-3 py-1 rounded-full bg-foreground/5 border border-foreground/10 text-xs text-muted-foreground">Nature</span>
                                <span className="px-3 py-1 rounded-full bg-foreground/5 border border-foreground/10 text-xs text-muted-foreground">Animals</span>
                                <span className="px-3 py-1 rounded-full bg-foreground/5 border border-foreground/10 text-xs text-muted-foreground">Macro</span>
                            </div>
                        </div>
                        <div className="md:col-span-8">
                            <CategoryShowcase 
                                categoryTitle="Wildlife" 
                                items={playgroundData.wildlife} 
                                autoplay={true}
                                onItemClick={(index) => openModal('wildlife', index)}
                            />
                        </div>
                    </div>

                    {/* Event Photography */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center border-t border-border pt-16">
                        <div className="md:col-span-8 order-2 md:order-1">
                            <CategoryShowcase 
                                categoryTitle="Events" 
                                items={playgroundData.events} 
                                onItemClick={(index) => openModal('events', index)}
                            />
                        </div>
                         <div className="md:col-span-4 order-1 md:order-2 space-y-4 text-right">
                            <h3 className="text-3xl font-bold text-foreground">Event Photography</h3>
                            <p className="text-muted-foreground leading-relaxed text-sm ml-auto">
                                Capturing the intensity and spirit of sportsmanship. High-energy moments from NIBM cricket tournaments and team celebrations.
                            </p>
                            <div className="flex flex-wrap gap-2 pt-2 justify-end">
                                <span className="px-3 py-1 rounded-full bg-foreground/5 border border-foreground/10 text-xs text-muted-foreground">Sports</span>
                                <span className="px-3 py-1 rounded-full bg-foreground/5 border border-foreground/10 text-xs text-muted-foreground">Action</span>
                                <span className="px-3 py-1 rounded-full bg-foreground/5 border border-foreground/10 text-xs text-muted-foreground">Candid</span>
                            </div>
                        </div>
                    </div>

                    {/* Architecture & Landscape */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center border-t border-border pt-16">
                        <div className="md:col-span-4 space-y-4">
                            <h3 className="text-3xl font-bold text-foreground">Architecture & Landscape</h3>
                            <p className="text-muted-foreground leading-relaxed text-sm">
                                A study of structures and environments. Featuring the historic Bogambara prison and the serene Kandy Lake at sunset.
                            </p>
                             <div className="flex flex-wrap gap-2 pt-2">
                                <span className="px-3 py-1 rounded-full bg-foreground/5 border border-foreground/10 text-xs text-muted-foreground">Historic</span>
                                <span className="px-3 py-1 rounded-full bg-foreground/5 border border-foreground/10 text-xs text-muted-foreground">Urban</span>
                                <span className="px-3 py-1 rounded-full bg-foreground/5 border border-foreground/10 text-xs text-muted-foreground">Scenic</span>
                            </div>
                        </div>
                        <div className="md:col-span-8">
                            <CategoryShowcase 
                                categoryTitle="Architecture" 
                                items={playgroundData.architecture} 
                                onItemClick={(index) => openModal('architecture', index)}
                            />
                        </div>
                    </div>

                    {/* Videography - Description Right */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center border-t border-border pt-16">
                        <div className="md:col-span-8 order-2 md:order-1">
                            <CategoryShowcase 
                                categoryTitle="Videography" 
                                items={playgroundData.videography} 
                                autoplay={true}
                                onItemClick={(index) => openModal('videography', index)}
                            />
                        </div>
                        <div className="md:col-span-4 order-1 md:order-2 space-y-4 text-right">
                            <h3 className="text-3xl font-bold text-foreground">Videography</h3>
                            <p className="text-muted-foreground leading-relaxed text-sm ml-auto">
                                Dynamic storytelling through video. Capturing event highlights and cinematic landscapes
                                to create immersive visual experiences.
                            </p>
                             <div className="flex flex-wrap gap-2 pt-2 justify-end">
                                <span className="px-3 py-1 rounded-full bg-foreground/5 border border-foreground/10 text-xs text-muted-foreground">Highlights</span>
                                <span className="px-3 py-1 rounded-full bg-foreground/5 border border-foreground/10 text-xs text-muted-foreground">Cinematic</span>
                            </div>
                        </div>
                    </div>

                    {/* Short Films - Separate Category */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center border-t border-border pt-16">
                        <div className="md:col-span-4 space-y-4">
                            <h3 className="text-3xl font-bold text-foreground">Short Films</h3>
                            <p className="text-muted-foreground leading-relaxed text-sm">
                                Storytelling through cinema. Scripting, directing, and editing original narratives.
                            </p>
                             <div className="flex flex-wrap gap-2 pt-2">
                                <span className="px-3 py-1 rounded-full bg-foreground/5 border border-foreground/10 text-xs text-muted-foreground">Creative</span>
                                <span className="px-3 py-1 rounded-full bg-foreground/5 border border-foreground/10 text-xs text-muted-foreground">Direction</span>
                            </div>
                        </div>
                        <div className="md:col-span-8">
                            <CategoryShowcase 
                                categoryTitle="Short Films" 
                                items={playgroundData.shortFilm} 
                                onItemClick={(index) => openModal('shortFilm', index)}
                            />
                        </div>
                    </div>

                    {/* Flyers & Posters */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center border-t border-border pt-16">
                        <div className="md:col-span-8 order-2 md:order-1">
                            <CategoryShowcase 
                                categoryTitle="Flyers" 
                                items={playgroundData.flyers} 
                                autoplay={true}
                                onItemClick={(index) => openModal('flyers', index)}
                            />
                        </div>
                        <div className="md:col-span-4 order-1 md:order-2 space-y-4 text-right">
                            <h3 className="text-3xl font-bold text-foreground">Flyers & Posters</h3>
                            <p className="text-muted-foreground leading-relaxed text-sm ml-auto">
                                Promotional designs for courses, events, and marketing campaigns. 
                                Engaging visuals for NIBM, STEMUP, and corporate clients.
                            </p>
                            <div className="flex flex-wrap gap-2 pt-2 justify-end">
                                <span className="px-3 py-1 rounded-full bg-foreground/5 border border-foreground/10 text-xs text-muted-foreground">Events</span>
                                <span className="px-3 py-1 rounded-full bg-foreground/5 border border-foreground/10 text-xs text-muted-foreground">Promotional</span>
                                <span className="px-3 py-1 rounded-full bg-foreground/5 border border-foreground/10 text-xs text-muted-foreground">Social Media</span>
                            </div>
                        </div>
                    </div>

                    {/* Logos & Branding */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center border-t border-border pt-16">
                        <div className="md:col-span-4 space-y-4">
                            <h3 className="text-3xl font-bold text-foreground">Logos & Branding</h3>
                            <p className="text-muted-foreground leading-relaxed text-sm">
                                Creating distinctive brand identities. From corporate logos to event branding and student society emblems.
                            </p>
                             <div className="flex flex-wrap gap-2 pt-2">
                                <span className="px-3 py-1 rounded-full bg-foreground/5 border border-foreground/10 text-xs text-muted-foreground">Identity</span>
                                <span className="px-3 py-1 rounded-full bg-foreground/5 border border-foreground/10 text-xs text-muted-foreground">Vector</span>
                                <span className="px-3 py-1 rounded-full bg-foreground/5 border border-foreground/10 text-xs text-muted-foreground">Branding</span>
                            </div>
                        </div>
                        <div className="md:col-span-8">
                            <CategoryShowcase 
                                categoryTitle="Logos" 
                                items={playgroundData.logos} 
                                onItemClick={(index) => openModal('logos', index)}
                            />
                        </div>
                    </div>

                    {/* Printed Materials */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center border-t border-border pt-16">
                        <div className="md:col-span-8 order-2 md:order-1">
                            <CategoryShowcase 
                                categoryTitle="Printed Materials" 
                                items={playgroundData.printed} 
                                onItemClick={(index) => openModal('printed', index)}
                            />
                        </div>
                        <div className="md:col-span-4 order-1 md:order-2 space-y-4 text-right">
                            <h3 className="text-3xl font-bold text-foreground">Printed Materials</h3>
                            <p className="text-muted-foreground leading-relaxed text-sm ml-auto">
                                Tangible design assets including brochures, certificates, and X-banners for professional and educational events.
                            </p>
                            <div className="flex flex-wrap gap-2 pt-2 justify-end">
                                <span className="px-3 py-1 rounded-full bg-foreground/5 border border-foreground/10 text-xs text-muted-foreground">Brochures</span>
                                <span className="px-3 py-1 rounded-full bg-foreground/5 border border-foreground/10 text-xs text-muted-foreground">Certificates</span>
                                <span className="px-3 py-1 rounded-full bg-foreground/5 border border-foreground/10 text-xs text-muted-foreground">Banners</span>
                            </div>
                        </div>
                    </div>

                 </div>
             </div>

             {/* Lightbox Modal */}
             <AnimatePresence>
                {modalOpen && selectedCategory && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
                    >
                        <FramerThumbnailCarousel 
                            items={getCategoryItems(selectedCategory)}
                            initialIndex={startIndex}
                            onClose={() => setModalOpen(false)}
                        />
                    </motion.div>
                )}
             </AnimatePresence>
        </main>
    );
};