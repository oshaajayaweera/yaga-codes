import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { SEO } from '@/components/seo';
import { ArrowRight, Eye, ThumbsUp } from 'lucide-react';
import { BLOG_POSTS } from '@/data/blog';
import { BlogPostView } from '@/pages/blog/BlogPostView';

export default function BlogPage() {
    const { slug } = useParams();
    const navigate = useNavigate();
    const [selectedBlog, setSelectedBlog] = useState<any | null>(null);

    // Scroll to top when switching views or loading
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug, selectedBlog]);

    useEffect(() => {
        if (slug) {
            const blog = BLOG_POSTS.find(b => b.id === slug);
            if (blog) {
                setSelectedBlog(blog);
            } else {
                navigate('/blog');
            }
        } else {
            setSelectedBlog(null);
        }
    }, [slug, navigate]);

    if (selectedBlog) {
        return <BlogPostView blog={selectedBlog} onBack={() => navigate('/blog')} />;
    }

    return (
        <main className="min-h-screen w-full bg-background pt-32 px-6 md:px-20 pb-32">
             <SEO 
                title="Blog - Oshadha Jayaweera"
                description="Insights on digital marketing, strategy, and content creation in Sri Lanka."
                keywords={["Marketing Blog", "Digital Strategy", "Sri Lanka Trends"]}
            />
            
            <div className="max-w-5xl mx-auto">
                <div className="mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground tracking-tight">Thoughts & <span className="text-foreground/50">Insights</span></h1>
                    <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                        Deconstructing what works in digital marketing. No fluff, just field-tested strategies and observations from the Sri Lankan market.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {BLOG_POSTS.map((post) => (
                        <div 
                            key={post.id}
                            onClick={() => navigate(`/blog/${post.id}`)}
                            className="group cursor-pointer rounded-2xl border border-border bg-card/40 overflow-hidden hover:border-foreground/20 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
                        >
                            <div className="aspect-[16/9] overflow-hidden bg-muted relative">
                                <img 
                                    src={post.image} 
                                    alt={post.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="px-3 py-1 bg-background/80 backdrop-blur-md rounded-full text-xs font-medium uppercase tracking-wider text-foreground border border-white/10">
                                        {post.category}
                                    </span>
                                </div>
                            </div>
                            <div className="p-6 md:p-8">
                                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4 uppercase tracking-widest">
                                    <span>{post.date}</span>
                                    <span>•</span>
                                    <span>{post.readTime}</span>
                                </div>
                                <h2 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors leading-tight">
                                    {post.title}
                                </h2>
                                <p className="text-muted-foreground line-clamp-2 leading-relaxed mb-6">
                                    {post.subtitle}
                                </p>
                                <div className="flex items-center justify-between mt-auto pt-6 border-t border-border/50">
                                     <div className="flex items-center gap-4">
                                         {post.stats.map((stat: any, i: number) => (
                                             <div key={i} className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground/60">
                                                 {stat.icon}
                                                 <span>{stat.value}</span>
                                             </div>
                                         ))}
                                     </div>
                                     <span className="text-xs font-bold uppercase tracking-widest text-foreground flex items-center gap-2 group-hover:gap-3 transition-all">
                                         Read Article <ArrowRight size={14} />
                                     </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
};