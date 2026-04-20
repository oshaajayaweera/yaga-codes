import React from 'react';
import { ArrowLeft, ArrowRight, CheckCircle, Search, Compass, Zap, Clock, Share2, Target, Palette, Beaker, MousePointerClick, CheckSquare, Smartphone, ShoppingBag, MapPin, Bot, MessageCircle, Layers, BarChart, Star, Shuffle, Video, AlertCircle, Wrench, TrendingUp, ListChecks, AlertTriangle, X, PenTool } from "lucide-react";
import { SEO } from '@/components/seo';

export const BlogPostView = ({ blog, onBack }: { blog: any, onBack: () => void }) => {
    
    // Schema for Blog Posting
    const blogSchema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": blog.title,
        "image": blog.images && blog.images.length > 0 ? blog.images : ["https://oshadha.me/jay-icon.png"],
        "author": {
            "@type": "Person",
            "name": "Oshadha Jayaweera"
        },
        "genre": "Digital Marketing",
        "description": blog.subtitle || blog.intro,
        "url": `https://oshadha.me/blog/${blog.id}`,
        "datePublished": "2024-01-01" // In a real app, this should be dynamic
    };

    // Render content based on ID
    const renderContent = () => {
        if (blog.id === 'strategy-fail') {
            return (
                <>
                     {/* Intro - Full Text */}
                     <p className="text-xl text-foreground/90 leading-relaxed mb-8">
                        The digital marketing world looks simple from the outside. Post a few visuals, boost a couple of ads, wait for the magic to happen.
                        But reality hits hard. Most campaigns fail not because the platform is broken, but because the strategy behind them is weak.
                     </p>
                     
                     <p className="text-muted-foreground mb-12">
                        After running campaigns for multiple brands across software, service, and ecommerce categories, I’ve learned one thing very clearly — performance is never an accident. It’s built through planning, testing, and strong creative direction.
                        <br/><br/>
                        Here’s how I approach digital marketing and the exact methods I use to turn losing campaigns into performing ones.
                     </p>

                     {/* Engagement Section */}
                     <section className="mb-16">
                        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                            <span className="p-2 bg-blue-500/10 rounded-lg text-blue-400"><UsersIcon /></span>
                            First, I Build Engagement and Traffic the Smart Way
                        </h2>
                        <div className="bg-card/50 border border-border rounded-2xl p-8 mb-6">
                            <p className="mb-6 text-muted-foreground">
                                Campaigns collapse when marketers panic and go straight for conversions.
                                I never do that.
                                <br/><br/>
                                I focus on engagement and traffic first.
                                Top of funnel attention builds:
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {['Trust', 'Recall', 'Familiarity'].map((item) => (
                                    <div key={item} className="flex items-center gap-3 bg-background/40 p-4 rounded-xl border border-border">
                                        <CheckCircle className="text-green-400 h-5 w-5" />
                                        <span className="font-semibold text-foreground">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <p className="text-muted-foreground">
                            Then I push that warmed audience to landing pages or WhatsApp using traffic ads optimized for landing page views or link clicks.
                            <br/><br/>
                            That’s how you reduce ad cost and make the algorithm work for you instead of against you.
                        </p>
                     </section>

                     {/* Creative Hook Section */}
                     <section className="mb-16">
                        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                             <span className="p-2 bg-yellow-500/10 rounded-lg text-yellow-400"><Zap size={24} /></span>
                             Strong Targeting Starts With the Creative Hook
                        </h2>
                        <p className="mb-8 text-muted-foreground">
                            Most of my best-performing campaigns had one thing in common — a strong hook.
                            <br/><br/>
                            You can have the perfect audience, but if your creative doesn’t grab attention in the first second, you’ve already lost.
                            <br/><br/>
                            I test different angles like:
                        </p>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                             <div className="p-6 bg-red-500/5 border border-red-500/20 rounded-xl hover:bg-red-500/10 transition-colors">
                                 <AlertCircle className="text-red-400 mb-3 h-8 w-8" />
                                 <h3 className="font-bold text-foreground mb-1">Problem First</h3>
                                 <p className="text-sm text-muted-foreground">Agitate the pain point.</p>
                             </div>
                             <div className="p-6 bg-purple-500/5 border border-purple-500/20 rounded-xl hover:bg-purple-500/10 transition-colors">
                                 <Star className="text-purple-400 mb-3 h-8 w-8" />
                                 <h3 className="font-bold text-foreground mb-1">Value First</h3>
                                 <p className="text-sm text-muted-foreground">Show the benefit immediately.</p>
                             </div>
                             <div className="p-6 bg-blue-500/5 border border-blue-500/20 rounded-xl hover:bg-blue-500/10 transition-colors">
                                 <SparklesIcon />
                                 <h3 className="font-bold text-foreground mb-1">Transformation First</h3>
                                 <p className="text-sm text-muted-foreground">Before and after results.</p>
                             </div>
                             <div className="p-6 bg-pink-500/5 border border-pink-500/20 rounded-xl hover:bg-pink-500/10 transition-colors">
                                 <HeartIcon />
                                 <h3 className="font-bold text-foreground mb-1">Emotion First</h3>
                                 <p className="text-sm text-muted-foreground">Connect on a human level.</p>
                             </div>
                        </div>
                        <p className="text-muted-foreground">
                             Then I match the creative style to the audience.
                             That’s where the real boost comes from.
                        </p>
                     </section>

                     {/* Fixing Broken Campaigns */}
                     <section className="mb-16">
                        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                            <span className="p-2 bg-orange-500/10 rounded-lg text-orange-400"><Wrench size={24} /></span>
                            Fixing Broken Campaigns Is Basically My Daily Routine
                        </h2>
                        <div className="flex flex-col md:flex-row gap-8 items-start">
                             <div className="flex-1">
                                 <p className="mb-4 text-muted-foreground">
                                     If I look at your failing campaign for two minutes, I’ll already know what went wrong.
                                     Ninety percent of the time the issue is simple:
                                 </p>
                                 <ul className="space-y-3">
                                     {['Bad visuals', 'Outdated targets', 'Confused message', 'Weak hook', 'Landing page disaster'].map((issue, idx) => (
                                         <li key={idx} className="flex items-center gap-3 text-foreground/80">
                                             <div className="h-1.5 w-1.5 rounded-full bg-red-500" />
                                             {issue}
                                         </li>
                                     ))}
                                 </ul>
                             </div>
                             <div className="flex-1 bg-card rounded-xl p-6 border border-border">
                                 <h4 className="font-bold text-foreground mb-4 flex items-center gap-2"><TrendingUp className="text-green-400" size={18}/> The Fix</h4>
                                 <p className="text-sm text-muted-foreground italic">"Once I refresh the creative direction, rewrite the message, and tighten the audience, the campaign usually turns around fast."</p>
                             </div>
                        </div>
                     </section>

                     {/* Formats Section */}
                     <section className="mb-16">
                         <h2 className="text-2xl font-bold text-foreground mb-6">Short Videos and Carousels Win. Every. Time.</h2>
                         <p className="text-muted-foreground mb-6">
                             On Meta, attention is currency. People scroll fast.
                             <br/><br/>
                             That’s why I mainly use:
                         </p>
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                             <div className="bg-gradient-to-br from-card to-background p-8 rounded-2xl border border-border">
                                 <Video className="text-foreground mb-4 h-8 w-8" />
                                 <h3 className="text-xl font-bold text-foreground mb-2">Short Videos</h3>
                                 <p className="text-muted-foreground">Grab attention instantly.</p>
                             </div>
                             <div className="bg-gradient-to-br from-card to-background p-8 rounded-2xl border border-border">
                                 <Layers className="text-foreground mb-4 h-8 w-8" />
                                 <h3 className="text-xl font-bold text-foreground mb-2">Carousels</h3>
                                 <p className="text-muted-foreground">Explain value in depth.</p>
                             </div>
                         </div>
                         <p className="text-muted-foreground">This combination consistently beats static images.</p>
                     </section>

                     {/* Measurable Results Section */}
                     <section className="mb-16 bg-card/30 border border-border p-8 rounded-2xl">
                         <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                             <span className="p-2 bg-green-500/10 rounded-lg text-green-400"><BarChart size={24} /></span>
                             Yes, I Deliver Measurable Results
                         </h2>
                         <p className="text-muted-foreground mb-6">
                             I’m not here to talk fluff. I care about numbers.
                         </p>
                         <p className="text-muted-foreground mb-6">
                             From improving reach and engagement to lowering cost per click and increasing landing page views, every win comes from the same formula:
                         </p>
                         <div className="bg-background/50 p-6 rounded-xl border border-border text-center">
                             <p className="text-xl font-mono text-foreground">
                                 clear message + clean visuals + strategic targeting.
                             </p>
                         </div>
                     </section>

                     {/* Industries Section - STRICTLY MATCHING TEXT */}
                     <section className="mb-16">
                        <h2 className="text-2xl font-bold text-foreground mb-8">Software, Service, Ecommerce — I’ve Worked Across All</h2>
                        <p className="text-muted-foreground mb-6">
                            I know how tough software and service brands are.
                            Trust is everything.
                        </p>
                        
                        <div className="bg-card/40 border border-border rounded-2xl p-8 mb-8">
                             <p className="text-foreground font-medium mb-4 text-lg">So I focus on:</p>
                             <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {['clean layouts', 'problem solving hooks', 'simple benefits', 'real proof not fake hype'].map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-muted-foreground">
                                        <div className="h-2 w-2 rounded-full bg-foreground/40" />
                                        {item}
                                    </li>
                                ))}
                             </ul>
                        </div>

                        <p className="text-muted-foreground mb-6">
                            Ecommerce needs speed.
                            The audience scrolls fast, so the message needs to hit fast too.
                        </p>
                     </section>

                     {/* Planning Section */}
                     <section className="mb-16">
                        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                             <span className="p-2 bg-indigo-500/10 rounded-lg text-indigo-400"><ListChecks size={24} /></span>
                             I Plan My Campaigns Before Touching the Ad Manager
                        </h2>
                        <div className="flex flex-col md:flex-row gap-8">
                             <div className="flex-1">
                                 <p className="text-muted-foreground mb-4">
                                     Most people jump straight into Ads Manager without planning. That’s why they fail.
                                 </p>
                                 <p className="text-muted-foreground mb-4">
                                     I always plan:
                                 </p>
                                 <ul className="space-y-2">
                                     {['Audience research', 'Content direction', 'Message angle', 'Competitor patterns', 'Creative requirements', 'Testing variations'].map((item, idx) => (
                                         <li key={idx} className="flex items-center gap-2 text-foreground/80">
                                             <div className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
                                             {item}
                                         </li>
                                     ))}
                                 </ul>
                             </div>
                             <div className="flex-1 flex items-center justify-center bg-card/30 rounded-xl p-8 border border-border">
                                 <p className="text-center text-lg font-medium text-foreground/90">
                                     "This saves time, money, and revisions."
                                 </p>
                             </div>
                        </div>
                     </section>

                     {/* Tools Section */}
                     <section className="mb-16">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-card/30 border border-border rounded-2xl p-8">
                             <div>
                                <h3 className="text-xl font-bold text-foreground mb-2">My Toolset Is Simple but Effective</h3>
                                <p className="text-muted-foreground text-sm mb-4">I stick to tools that help me deliver quality faster:</p>
                                <ul className="text-muted-foreground text-sm list-disc pl-5 space-y-1 mb-4">
                                    <li>Canva</li>
                                    <li>Adobe</li>
                                    <li>Illustrator</li>
                                    <li>CapCut</li>
                                </ul>
                                <p className="text-muted-foreground text-xs">Canva and CapCut for speed.<br/>Illustrator for detailed visual work.<br/>Adobe for polished content.</p>
                             </div>
                             <div className="flex gap-4">
                                 <div className="flex flex-col items-center gap-2">
                                     <div className="h-12 w-12 rounded-xl bg-blue-500/20 flex items-center justify-center border border-blue-500/30">
                                         <Palette className="text-blue-400" size={24} />
                                     </div>
                                     <span className="text-[10px] uppercase text-muted-foreground/60">Canva</span>
                                 </div>
                                 <div className="flex flex-col items-center gap-2">
                                     <div className="h-12 w-12 rounded-xl bg-orange-500/20 flex items-center justify-center border border-orange-500/30">
                                         <PenTool className="text-orange-400" size={24} />
                                     </div>
                                     <span className="text-[10px] uppercase text-muted-foreground/60">Adobe</span>
                                 </div>
                                 <div className="flex flex-col items-center gap-2">
                                     <div className="h-12 w-12 rounded-xl bg-foreground/10 flex items-center justify-center border border-foreground/20">
                                         <Video className="text-foreground" size={24} />
                                     </div>
                                     <span className="text-[10px] uppercase text-muted-foreground/60">CapCut</span>
                                 </div>
                             </div>
                        </div>
                        <p className="text-center text-sm text-neutral-500 mt-4 uppercase tracking-widest">Speed plus quality wins campaigns.</p>
                     </section>

                     {/* A/B Testing Section */}
                     <section className="mb-16">
                         <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                             <span className="p-2 bg-teal-500/10 rounded-lg text-teal-400"><Beaker size={24} /></span>
                             I Run A and B Tests Because Guessing Is for Amateurs
                         </h2>
                         <p className="text-muted-foreground mb-6">
                             Testing is everything.
                         </p>
                         <p className="text-muted-foreground mb-6">
                             I test:
                         </p>
                         <div className="flex flex-wrap gap-3 mb-6">
                             {['hooks', 'layouts', 'colors', 'thumbnails', 'copy styles'].map((test, idx) => (
                                 <span key={idx} className="px-4 py-2 bg-secondary rounded-lg border border-border text-sm text-foreground">{test}</span>
                             ))}
                         </div>
                         <p className="text-muted-foreground italic">
                             This tells me exactly what the audience responds to so the strategy becomes stronger.
                         </p>
                     </section>

                     {/* Mistakes Section */}
                     <section className="mb-16">
                        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                             <span className="p-2 bg-red-500/10 rounded-lg text-red-400"><AlertTriangle size={24} /></span>
                             The Most Common Mistakes I See in the Industry
                        </h2>
                        <div className="bg-red-500/5 border-l-4 border-red-500 p-6 rounded-r-xl">
                            <p className="text-foreground font-medium mb-4">Most marketers self sabotage. They skip the basics and then wonder why nothing works.</p>
                            <p className="text-muted-foreground mb-4">The biggest mistakes I see:</p>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                                <li className="text-muted-foreground flex items-center gap-2"><X size={14} className="text-red-500" /> no testing</li>
                                <li className="text-muted-foreground flex items-center gap-2"><X size={14} className="text-red-500" /> weak hooks</li>
                                <li className="text-muted-foreground flex items-center gap-2"><X size={14} className="text-red-500" /> using the same visuals for every audience</li>
                                <li className="text-muted-foreground flex items-center gap-2"><X size={14} className="text-red-500" /> relying only on broad targeting</li>
                                <li className="text-muted-foreground flex items-center gap-2"><X size={14} className="text-red-500" /> forgetting landing page experience</li>
                                <li className="text-muted-foreground flex items-center gap-2"><X size={14} className="text-red-500" /> no strategy behind the ads</li>
                            </ul>
                            <div className="border-t border-red-500/20 pt-4 mt-2">
                                <p className="text-foreground/80 font-medium">Good ads can’t save a bad plan.</p>
                                <p className="text-foreground/80 font-medium">Good visuals can’t save a bad message.</p>
                                <p className="text-foreground/80 font-medium">Good budgets can’t save bad targeting.</p>
                                <p className="text-foreground font-bold mt-2 text-lg">The strategy must lead everything.</p>
                            </div>
                        </div>
                     </section>

                     <div className="border-t border-border pt-12 mt-12">
                         <h3 className="text-2xl font-bold text-foreground mb-4">Final Thoughts</h3>
                         <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                            Digital marketing is not luck. It’s not a gamble.
                         </p>
                         <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                            Real results come from:
                         </p>
                         <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8 text-muted-foreground">
                             {['smart planning', 'strong creative direction', 'clean visual communication', 'correct targeting', 'continuous testing', 'performance focused content'].map((item, i) => (
                                 <li key={i} className="flex items-center gap-2">
                                     <CheckCircle size={14} className="text-foreground" /> {item}
                                 </li>
                             ))}
                         </ul>
                         <p className="text-lg text-muted-foreground leading-relaxed">
                            That’s how I build campaigns for brands and why even simple ideas end up performing better than expected.
                         </p>
                         <p className="text-lg text-foreground font-medium leading-relaxed mt-6 p-6 bg-card rounded-xl border border-border">
                            If you structure your workflow the same way, your results won’t just improve — they will transform.
                         </p>
                     </div>
                </>
            );
        } else if (blog.id === 'campaign-planning') {
            return (
                <>
                     {/* Intro - Full Text */}
                     <p className="text-xl text-foreground/90 leading-relaxed mb-8">
                        Most people rush into Ads Manager the moment they get an idea.
                        Then they complain that the campaign failed.
                     </p>
                     
                     <p className="text-muted-foreground mb-12">
                        Planning is the backbone of performance.
                        Without a plan, the algorithm has nothing strong to optimize.
                        I’ve seen this across software, service, ecommerce, event marketing — the same pattern everywhere.
                        <br/><br/>
                        Here is exactly how I plan a campaign before touching the launch button.
                        This process has saved budgets, improved results, and fixed broken campaigns more times than I can count.
                     </p>

                     {/* Step 1: Audience */}
                     <section className="mb-16">
                        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                            <span className="p-2 bg-blue-500/10 rounded-lg text-blue-400"><Search size={24} /></span>
                            First Step: Know the Audience better than they know themselves
                        </h2>
                        <div className="bg-card/50 border border-border rounded-2xl p-8 mb-6">
                            <p className="mb-6 text-muted-foreground">
                                Before creating a single visual, I study the audience.
                                Not the broad category, but the real people inside it.
                                <br/><br/>
                                I look at:
                            </p>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                                <li className="flex items-center gap-3 text-foreground/80"><div className="h-1.5 w-1.5 rounded-full bg-blue-400" />what problems they face</li>
                                <li className="flex items-center gap-3 text-foreground/80"><div className="h-1.5 w-1.5 rounded-full bg-blue-400" />what triggers their interest</li>
                                <li className="flex items-center gap-3 text-foreground/80"><div className="h-1.5 w-1.5 rounded-full bg-blue-400" />what content they respond to</li>
                                <li className="flex items-center gap-3 text-foreground/80"><div className="h-1.5 w-1.5 rounded-full bg-blue-400" />how they behave on social media</li>
                                <li className="flex items-center gap-3 text-foreground/80"><div className="h-1.5 w-1.5 rounded-full bg-blue-400" />what devices they use</li>
                                <li className="flex items-center gap-3 text-foreground/80"><div className="h-1.5 w-1.5 rounded-full bg-blue-400" />what time they are most active</li>
                            </ul>
                            <p className="text-muted-foreground">
                                This is what stops targeting from becoming guesswork.
                                When you know the audience properly, everything else becomes easier — messaging, visuals, hooks, timing.
                            </p>
                        </div>
                     </section>

                     {/* Step 2: Content Direction */}
                     <section className="mb-16">
                        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                             <span className="p-2 bg-purple-500/10 rounded-lg text-purple-400"><Compass size={24} /></span>
                             Second Step: Build the Content Direction
                        </h2>
                        <div className="flex flex-col md:flex-row gap-8">
                             <div className="flex-1">
                                 <p className="text-muted-foreground mb-4">
                                     This is where most marketers mess up.
                                     They create content after making the campaign.
                                     I do the opposite.
                                 </p>
                                 <p className="text-foreground font-medium mb-4">
                                     Content direction first — visuals later.
                                 </p>
                                 <p className="text-muted-foreground mb-4">
                                     I plan:
                                 </p>
                                 <ul className="space-y-2">
                                     {['primary message', 'supporting message', 'angle of transformation', 'emotional tone', 'value point', 'visual concept', 'call to action'].map((item, idx) => (
                                         <li key={idx} className="flex items-center gap-2 text-foreground/80">
                                             <div className="h-1.5 w-1.5 rounded-full bg-purple-500" />
                                             {item}
                                         </li>
                                     ))}
                                 </ul>
                             </div>
                             <div className="flex-1 flex items-center justify-center bg-card/30 rounded-xl p-8 border border-border">
                                 <p className="text-center text-lg font-medium text-foreground/90">
                                     "If the content direction is weak, the campaign is dead before it starts."
                                 </p>
                             </div>
                        </div>
                     </section>

                     {/* Step 3: Creative Hooks */}
                     <section className="mb-16">
                        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                             <span className="p-2 bg-yellow-500/10 rounded-lg text-yellow-400"><Zap size={24} /></span>
                             Third Step: Decide the Creative Hooks
                        </h2>
                        <p className="mb-8 text-muted-foreground">
                            Your hook is everything.
                            If your hook fails, your campaign fails.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                            {['problem first', 'result first', 'emotional sharp hook', 'brand identity driven hook', 'curiosity hook', 'quick transformation preview'].map((hook, i) => (
                                <div key={i} className="p-4 bg-secondary/50 border border-border rounded-lg">
                                    <span className="text-foreground/90">{hook}</span>
                                </div>
                            ))}
                        </div>
                        <p className="text-muted-foreground">
                             Once I finalize the strongest hook idea, I structure all visuals around it.
                             <br/><br/>
                             That’s why my campaigns catch attention fast and keep people watching or reading.
                        </p>
                     </section>

                     {/* Step 4: Timing */}
                     <section className="mb-16">
                        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                            <span className="p-2 bg-green-500/10 rounded-lg text-green-400"><Clock size={24} /></span>
                            Fourth Step: Timing and Posting Behaviour
                        </h2>
                        <div className="bg-card/50 border border-border rounded-2xl p-8 mb-6">
                            <p className="mb-6 text-muted-foreground">
                                Timing matters more than people think.
                                Every audience has its own rhythm.
                                <br/><br/>
                                I analyze:
                            </p>
                            <div className="flex flex-wrap gap-3 mb-6">
                                {['peak activity time', 'weekday vs weekend patterns', 'cultural timing', 'seasonal interest', 'industry event timelines'].map((item, idx) => (
                                    <span key={idx} className="px-3 py-1 bg-green-900/20 text-green-200 border border-green-500/20 rounded-full text-sm">{item}</span>
                                ))}
                            </div>
                            <p className="text-muted-foreground">
                                When timing aligns with intent, performance increases automatically.
                                <br/><br/>
                                This is why the same ad posted at the wrong time looks like a failure.
                            </p>
                        </div>
                     </section>

                     {/* Step 5: Platform Selection */}
                     <section className="mb-16">
                        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                            <span className="p-2 bg-orange-500/10 rounded-lg text-orange-400"><Share2 size={24} /></span>
                            Fifth Step: Platform Selection Based on the Audience, Not Preference
                        </h2>
                        <p className="text-muted-foreground mb-6">
                            Every marketer has a favorite platform.
                            I don’t work like that.
                        </p>
                        <p className="text-muted-foreground mb-6">
                            Platform selection must match:
                        </p>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8 text-foreground/80">
                            {['the audience', 'the objective', 'the content format', 'the competition level', 'the cost per result'].map((item, i) => (
                                <li key={i} className="flex items-center gap-2">
                                    <div className="h-1.5 w-1.5 rounded-full bg-orange-400" /> {item}
                                </li>
                            ))}
                        </ul>
                        <div className="bg-card p-6 rounded-xl border border-border">
                            <h4 className="text-foreground font-bold mb-3">For example</h4>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li>Short form videos work well on Meta and TikTok</li>
                                <li>Longer explainers or value posts perform better on LinkedIn</li>
                                <li>Carousel breakdowns work best on Instagram</li>
                            </ul>
                            <p className="text-foreground font-medium mt-4">You select the platform based on response, not comfort.</p>
                        </div>
                     </section>

                     {/* Step 6: Objectives */}
                     <section className="mb-16">
                        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                            <span className="p-2 bg-red-500/10 rounded-lg text-red-400"><Target size={24} /></span>
                            Sixth Step: Define Clear Objectives
                        </h2>
                        <p className="text-muted-foreground mb-6">
                            People launch campaigns without knowing what they want.
                            That’s how budgets die.
                        </p>
                        <p className="text-muted-foreground mb-6">
                            My objectives are always clean:
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                            {['awareness', 'engagement', 'traffic', 'conversions', 'lead generation', 'retargeting'].map((obj, i) => (
                                <div key={i} className="bg-secondary/50 p-4 text-center rounded-lg border border-border text-foreground">
                                    {obj}
                                </div>
                            ))}
                        </div>
                        <p className="text-muted-foreground italic text-center">
                            A campaign with no clear objective is like a lens without focus.
                        </p>
                     </section>

                     {/* Step 7: Visual Concepts */}
                     <section className="mb-16">
                        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                            <span className="p-2 bg-pink-500/10 rounded-lg text-pink-400"><Palette size={24} /></span>
                            Seventh Step: Create Visual Concepts Before Designing
                        </h2>
                        <div className="flex flex-col md:flex-row items-center gap-8">
                            <div className="flex-1">
                                <p className="text-muted-foreground mb-4">
                                    Before opening Canva or Adobe, I build raw visual concepts:
                                </p>
                                <ul className="space-y-2">
                                    {['layout structure', 'color direction', 'typography style', 'spacing', 'text density', 'rhythm of frames (for video)'].map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-2 text-foreground/80">
                                            <div className="h-1.5 w-1.5 rounded-full bg-pink-500" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex-1 text-muted-foreground bg-card/30 p-6 rounded-xl border border-border">
                                <p className="mb-4">This makes the final design cleaner and more performance driven.</p>
                                <p className="text-foreground">Most bad ads fail because the visuals were created blindly with no concept.</p>
                            </div>
                        </div>
                     </section>

                     {/* Step 8: A/B Testing */}
                     <section className="mb-16">
                        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                            <span className="p-2 bg-cyan-500/10 rounded-lg text-cyan-400"><Beaker size={24} /></span>
                            Eighth Step: Plan A-B Tests from the beginning
                        </h2>
                        <p className="text-muted-foreground mb-6 font-bold">
                            This is non negotiable.
                        </p>
                        <p className="text-muted-foreground mb-6">
                            I test:
                        </p>
                        <div className="flex flex-wrap gap-3 mb-6">
                            {['hooks', 'layouts', 'colors', 'thumbnails', 'copy styles'].map((test, idx) => (
                                <span key={idx} className="px-4 py-2 bg-secondary rounded-lg border border-border text-sm text-foreground">{test}</span>
                            ))}
                        </div>
                        <p className="text-muted-foreground">
                            A campaign with no testing is just a guess.
                            The winning version always comes from data, not instinct.
                        </p>
                     </section>

                     {/* Step 9: Landing Experience */}
                     <section className="mb-16">
                        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                            <span className="p-2 bg-indigo-500/10 rounded-lg text-indigo-400"><MousePointerClick size={24} /></span>
                            Ninth Step: Review the Landing Experience
                        </h2>
                        <p className="text-muted-foreground mb-6">
                            If I’m driving traffic, the landing page must be ready.
                            Otherwise the ad cost increases and conversion drops.
                        </p>
                        <div className="bg-card/50 border border-border rounded-2xl p-6 mb-6">
                            <p className="text-muted-foreground mb-4">I check:</p>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {['loading speed', 'layout', 'clarity', 'CTA visibility', 'user flow', 'trust elements', 'mobile experience'].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-2 text-sm text-foreground">
                                        <CheckCircle size={14} className="text-indigo-400" /> {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <p className="text-foreground font-medium">
                            A good landing page can reduce cost more than any targeting tweak.
                        </p>
                     </section>

                     {/* Step 10: Checklist */}
                     <section className="mb-16">
                        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                            <span className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400"><CheckSquare size={24} /></span>
                            Tenth Step: Final Pre Launch Checklist
                        </h2>
                        <p className="text-muted-foreground mb-6">
                            Before hitting publish, I verify:
                        </p>
                        <ul className="space-y-3 bg-emerald-900/10 p-6 rounded-xl border border-emerald-500/20">
                            {['correct audience', 'correct objective', 'correct placements', 'correct budget schedule', 'correct tracking', 'correct linking', 'correct version of the visuals', 'correct copy'].map((item, idx) => (
                                <li key={idx} className="flex items-center gap-3 text-foreground">
                                    <CheckCircle size={16} className="text-emerald-500" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <p className="text-foreground font-bold mt-6 text-center text-lg">
                            One mistake here can ruin an entire week of planning.
                        </p>
                     </section>

                </>
            );
        } else if (blog.id === 'sl-trends-2025') {
            return (
                <>
                     {/* Intro */}
                     <p className="text-xl text-foreground/90 leading-relaxed mb-8">
                        Sri Lanka’s digital space is shifting fast. More people online, more creators entering the game, more brands fighting for the same attention.
                        If you don’t understand what’s changing right now, your marketing will fall behind before the year even starts.
                     </p>
                     <p className="text-muted-foreground mb-12">
                        After working with software brands, service companies, creators, education institutes and ecommerce businesses, I see what actually works in real campaigns — not what “gurus” bluff about.
                        <br/><br/>
                        Here are the trends shaping digital marketing in Sri Lanka in 2025, without any sugarcoating.
                     </p>

                     {/* 1. Short Videos */}
                     <section className="mb-16">
                        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                             <span className="p-2 bg-red-500/10 rounded-lg text-red-400"><Smartphone size={24} /></span>
                             Short Videos Dominate Everything
                        </h2>
                        <div className="bg-card/50 border border-border rounded-2xl p-8 mb-6">
                             <p className="text-muted-foreground mb-6">
                                People don’t read. They scroll.
                                <br/>
                                That’s why short videos are the new king on:
                             </p>
                             <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                                {['Instagram', 'TikTok', 'Facebook', 'YouTube Shorts'].map((platform, i) => (
                                    <div key={i} className="flex items-center gap-2 text-foreground font-medium bg-background/40 p-3 rounded-lg border border-border">
                                        <Video size={16} className="text-red-500" /> {platform}
                                    </div>
                                ))}
                             </div>
                             <p className="text-foreground/80 italic">
                                If your content can’t grab attention in the first one second, it’s dead.
                                Simple visuals and fast pacing outperform long posts or static photos every time.
                             </p>
                        </div>
                     </section>

                     {/* 2. Social Commerce */}
                     <section className="mb-16">
                        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                             <span className="p-2 bg-green-500/10 rounded-lg text-green-400"><ShoppingBag size={24} /></span>
                             Social Commerce Is Becoming the New Storefront
                        </h2>
                        <p className="text-muted-foreground mb-6">
                            Sri Lankans are buying directly through:
                        </p>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 text-muted-foreground">
                             {['Instagram DMs', 'WhatsApp', 'Facebook Shop', 'Messenger threads'].map((item, i) => (
                                 <li key={i} className="flex items-center gap-2">
                                     <div className="h-1.5 w-1.5 rounded-full bg-green-500" /> {item}
                                 </li>
                             ))}
                        </ul>
                        <div className="bg-card p-6 rounded-xl border border-border">
                            <p className="text-foreground font-medium mb-2">This means your content must do two jobs:</p>
                            <div className="flex gap-6 text-sm text-muted-foreground mb-4">
                                <span className="flex items-center gap-2"><CheckCircle size={14} className="text-green-400"/> build desire</span>
                                <span className="flex items-center gap-2"><CheckCircle size={14} className="text-green-400"/> close the sale instantly</span>
                            </div>
                            <p className="text-foreground/80">If your brand isn’t ready for DM based selling, you’re missing the biggest conversion channel in the country.</p>
                        </div>
                     </section>

                     {/* 3. Localized Content */}
                     <section className="mb-16">
                        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                             <span className="p-2 bg-yellow-500/10 rounded-lg text-yellow-400"><MapPin size={24} /></span>
                             Localized Content Beats “Global Aesthetic”
                        </h2>
                        <div className="flex flex-col md:flex-row gap-8 items-center">
                             <div className="flex-1">
                                 <p className="text-muted-foreground mb-4">People here connect more with:</p>
                                 <ul className="space-y-2">
                                     {['Sinhala and Tamil captions', 'local culture', 'real conversations', 'relatable lifestyle moments'].map((item, idx) => (
                                         <li key={idx} className="flex items-center gap-2 text-foreground/80">
                                             <div className="h-1.5 w-1.5 rounded-full bg-yellow-500" />
                                             {item}
                                         </li>
                                     ))}
                                 </ul>
                             </div>
                             <div className="flex-1 bg-yellow-900/10 p-6 rounded-xl border border-yellow-500/20 text-center">
                                 <p className="text-yellow-200 font-medium">
                                     "The more “Sri Lankan” your content feels, the faster it performs.
                                     Copying Western aesthetics without local flavour kills engagement."
                                 </p>
                             </div>
                        </div>
                     </section>

                     {/* 4. AI Strategy */}
                     <section className="mb-16">
                        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                             <span className="p-2 bg-purple-500/10 rounded-lg text-purple-400"><Bot size={24} /></span>
                             AI Is Now Part of Every Smart Strategy
                        </h2>
                        <p className="text-muted-foreground mb-6">
                            Sri Lankan marketers are finally using AI for:
                        </p>
                        <div className="flex flex-wrap gap-3 mb-6">
                            {['campaign planning', 'audience research', 'content direction', 'performance prediction', 'idea generation'].map((item, idx) => (
                                <span key={idx} className="px-3 py-1 bg-purple-900/20 text-purple-200 border border-purple-500/20 rounded-full text-sm">{item}</span>
                            ))}
                        </div>
                        <p className="text-foreground/80">
                            The brands that use AI plus human creativity are outperforming everyone still posting blindly.
                        </p>
                     </section>

                     {/* 5. Community Building */}
                     <section className="mb-16">
                        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                             <span className="p-2 bg-blue-500/10 rounded-lg text-blue-400"><MessageCircle size={24} /></span>
                             Community Building Is Replacing Loud Selling
                        </h2>
                        <p className="text-muted-foreground mb-6">
                            The algorithm rewards conversation. Not shouting.
                            <br/><br/>
                            Winning brands focus on:
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center mb-6">
                             {['polls', 'Q and A', 'story interactions', 'live sessions', 'user involvement'].map((item, i) => (
                                 <div key={i} className="bg-card p-3 rounded-lg border border-border text-sm text-foreground">
                                     {item}
                                 </div>
                             ))}
                        </div>
                        <p className="text-muted-foreground">
                            This builds trust and long term loyalty, not one time traffic spikes.
                        </p>
                     </section>

                     {/* 6. Platform Strategy */}
                     <section className="mb-16">
                        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                             <span className="p-2 bg-orange-500/10 rounded-lg text-orange-400"><Layers size={24} /></span>
                             Each Platform Needs Its Own Strategy
                        </h2>
                        <p className="text-muted-foreground mb-6">
                            People behave differently on every platform.
                            That’s why one creative cannot do everything.
                        </p>
                        <div className="bg-card/50 border border-border rounded-2xl p-6 mb-6">
                             <ul className="space-y-4">
                                 <li className="flex items-center justify-between text-muted-foreground border-b border-border pb-2"><span>reels</span> <ArrowRight size={14}/> <span className="text-foreground font-medium">attention</span></li>
                                 <li className="flex items-center justify-between text-muted-foreground border-b border-border pb-2"><span>carousels</span> <ArrowRight size={14}/> <span className="text-foreground font-medium">explanation</span></li>
                                 <li className="flex items-center justify-between text-muted-foreground border-b border-border pb-2"><span>WhatsApp</span> <ArrowRight size={14}/> <span className="text-foreground font-medium">conversion</span></li>
                                 <li className="flex items-center justify-between text-muted-foreground border-b border-border pb-2"><span>TikTok</span> <ArrowRight size={14}/> <span className="text-foreground font-medium">reach</span></li>
                                 <li className="flex items-center justify-between text-muted-foreground"><span>YouTube</span> <ArrowRight size={14}/> <span className="text-foreground font-medium">long term audience</span></li>
                             </ul>
                        </div>
                        <p className="text-muted-foreground">Brands are finally understanding this and adjusting their content flow.</p>
                     </section>

                     {/* 7. Data Analytics */}
                     <section className="mb-16">
                        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                             <span className="p-2 bg-teal-500/10 rounded-lg text-teal-400"><BarChart size={24} /></span>
                             Data and Analytics Are Becoming Mandatory
                        </h2>
                        <p className="text-muted-foreground mb-6">
                            Boosting random posts is dead.
                            <br/>
                            Marketers now track:
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                            {['engagement ratio', 'audience retention', 'CPC and CPL', 'landing page experience', 'creative performance', 'hook strength'].map((item, i) => (
                                <div key={i} className="bg-card/50 p-3 rounded text-center border border-border text-sm text-foreground/80">
                                    {item}
                                </div>
                            ))}
                        </div>
                        <p className="text-foreground font-medium">Decisions come from numbers, not ego.</p>
                     </section>

                     {/* 8. Influencer Marketing */}
                     <section className="mb-16">
                        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                             <span className="p-2 bg-pink-500/10 rounded-lg text-pink-400"><Star size={24} /></span>
                             Influencer Marketing Is Growing Fast
                        </h2>
                        <div className="bg-pink-900/10 border-l-4 border-pink-500 p-6 rounded-r-xl">
                            <p className="text-foreground mb-2">But only creators with:</p>
                            <ul className="list-disc pl-5 text-muted-foreground mb-4 space-y-1">
                                <li>authentic voice</li>
                                <li>real audience</li>
                                <li>niche influence</li>
                            </ul>
                            <p className="text-foreground font-bold">...are winning deals.</p>
                            <p className="text-muted-foreground mt-4 text-sm">
                                Brands are shifting from big influencers to micro creators because the ROI is cleaner and the trust is stronger.
                            </p>
                        </div>
                     </section>

                     {/* 9. Mobile First */}
                     <section className="mb-16">
                        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                             <span className="p-2 bg-indigo-500/10 rounded-lg text-indigo-400"><Smartphone size={24} /></span>
                             Mobile First Experience Is No Longer Optional
                        </h2>
                        <p className="text-muted-foreground mb-6">
                            Most Sri Lankans browse through mobile.
                            <br/>
                            If your website:
                        </p>
                        <div className="grid grid-cols-2 gap-4 mb-6">
                            {['loads slow', 'breaks layout', 'looks messy', 'uses heavy images'].map((item, i) => (
                                <div key={i} className="flex items-center gap-2 text-red-400 bg-red-900/10 p-3 rounded border border-red-500/10">
                                    <AlertTriangle size={16}/> {item}
                                </div>
                            ))}
                        </div>
                        <p className="text-foreground/80">you’re losing customers before they even read your headline.</p>
                     </section>

                     {/* 10. Hybrid Strategies */}
                     <section className="mb-16">
                        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                             <span className="p-2 bg-cyan-500/10 rounded-lg text-cyan-400"><Shuffle size={24} /></span>
                             Hybrid Strategies Work Better Than Single Channel Campaigns
                        </h2>
                        <p className="text-muted-foreground mb-6">
                            Offline plus online is now the real formula.
                        </p>
                        <div className="bg-card/50 border border-border rounded-2xl p-6">
                             <h4 className="text-foreground font-bold mb-4">Examples:</h4>
                             <ul className="space-y-3">
                                 {['social media to WhatsApp', 'video ads to landing page', 'influencer to ecommerce', 'community groups to brand loyalty'].map((item, idx) => (
                                     <li key={idx} className="flex items-center gap-3 text-muted-foreground">
                                         <div className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                                         {item}
                                     </li>
                                 ))}
                             </ul>
                        </div>
                        <p className="text-muted-foreground mt-6">Brands using multi touch campaigns are beating everyone relying on a single platform.</p>
                     </section>

                     {/* Final Thoughts */}
                     <div className="border-t border-border pt-12 mt-12">
                         <h3 className="text-2xl font-bold text-foreground mb-4">Final Thoughts</h3>
                         <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                            2025 belongs to the creators and brands that adapt fast.
                         </p>
                         <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                            The winners will be the ones who use:
                         </p>
                         <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8 text-muted-foreground">
                             {['video first content', 'localized communication', 'AI powered planning', 'platform specific strategy', 'strong analytics', 'community building', 'fast mobile UX', 'influencer collaborations', 'social commerce funnels'].map((item, i) => (
                                 <li key={i} className="flex items-center gap-2">
                                     <CheckCircle size={14} className="text-foreground" /> {item}
                                 </li>
                             ))}
                         </ul>
                         <p className="text-lg text-foreground font-medium leading-relaxed mt-6 p-6 bg-card rounded-xl border border-border text-center">
                            The ones who ignore these trends will spend more money for less results.
                         </p>
                     </div>
                </>
            );
        } else {
             // Fallback for generic blogs (future proofing)
             return (
                 <>
                    <p className="text-xl text-foreground/90 leading-relaxed mb-8">{blog.intro || blog.subtitle}</p>
                    <p className="text-neutral-500 italic">Full content for this article is not available in the preview.</p>
                 </>
             )
        }
    };

    return (
        <div className="relative min-h-screen w-full bg-background text-foreground overflow-hidden">
            <SEO 
                title={blog.title}
                description={blog.intro || blog.subtitle}
                keywords={["Digital Marketing Blog", "Sri Lanka Marketing", "Marketing Strategy", "Campaign Planning"]}
                type="article"
                schema={blogSchema}
            />

            {/* Background Effects - Copied from Monochrome Bento */}
            <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none">
                <div
                className="absolute inset-0 [--aurora-base:var(--background)] [--aurora-accent:rgba(59,130,246,0.1)]"
                style={{
                    background:
                    "radial-gradient(ellipse 55% 100% at 12% 0%, var(--aurora-accent), transparent 65%), radial-gradient(ellipse 40% 80% at 88% 0%, rgba(148,163,184,0.1), transparent 70%), var(--aurora-base)",
                }}
                />
                <div
                className="absolute inset-0 [--grid-color:rgba(128,128,128,0.1)]"
                style={{
                    backgroundImage:
                    "linear-gradient(to right, var(--grid-color) 1px, transparent 1px), linear-gradient(to bottom, var(--grid-color) 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                    backgroundPosition: "0 0, 0 0",
                    maskImage:
                    "radial-gradient(ellipse 80% 80% at 50% 0%, black 40%, transparent 100%)",
                    WebkitMaskImage:
                    "radial-gradient(ellipse 80% 80% at 50% 0%, black 40%, transparent 100%)",
                    opacity: 0.8,
                }}
                />
                <div
                className="pointer-events-none absolute inset-0"
                style={{
                    background:
                    "radial-gradient(circle at center, rgba(0,0,0,0) 50%, rgba(0,0,0,1) 100%)",
                    opacity: 0.6,
                }}
                />
            </div>

            <div className="relative mx-auto max-w-5xl px-6 py-20 pb-32">
                
                {/* Navigation Button Style */}
                <button
                    onClick={onBack}
                    className="group mb-12 flex items-center gap-2 rounded-full border border-border bg-background/5 px-5 py-2 text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground transition-colors duration-300 hover:bg-foreground/10 hover:text-foreground"
                >
                    <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-1" />
                    Back to thoughts
                </button>

                {/* Header Style */}
                <header className="mb-12 border-b border-border pb-10">
                     <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-3">
                            <span className="flex items-center gap-2 rounded-full border border-border bg-background/5 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-blue-400">
                                Blog Post
                            </span>
                            <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/40">
                                {blog.id === 'sl-trends-2025' ? 'Trends' : 'Strategy'}
                            </span>
                        </div>
                        <h1 className="text-4xl font-black tracking-tight text-foreground md:text-6xl leading-[1.1]">
                            {blog.title}
                        </h1>
                     </div>

                     <div className="mt-8 flex items-center gap-8 text-xs font-medium uppercase tracking-[0.1em] text-muted-foreground/50">
                        {blog.stats.map((stat: any, i: number) => (
                            <div key={i} className="flex items-center gap-2">
                                {React.cloneElement(stat.icon, { className: "h-4 w-4 text-foreground/70" })}
                                <span>{stat.value}</span>
                            </div>
                        ))}
                     </div>
                </header>

                {/* Content Container - Glassmorphism Card */}
                <article className="relative isolate overflow-hidden rounded-[2.5rem] border border-border bg-card/20 shadow-xl">
                    {/* Inner Card Effects */}
                    <div className="absolute inset-0 -z-10 bg-background/5 opacity-50" />
                    
                    <div className="p-8 md:p-12 lg:p-16">
                        <div className="prose prose-invert prose-lg max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-p:text-muted-foreground prose-p:leading-relaxed prose-strong:text-foreground prose-li:text-muted-foreground">
                            {renderContent()}
                        </div>
                    </div>
                </article>

                <footer className="mt-16 text-center text-xs uppercase tracking-[0.2em] text-muted-foreground/30">
                    Oshadha Jayaweera • Digital Marketer
                </footer>
            </div>
        </div>
    )
}

function UsersIcon() { return <Users size={24} /> }
function SparklesIcon() { return <Sparkles size={24} className="text-blue-400 mb-3 h-8 w-8" /> }
function HeartIcon() { return <Heart size={24} className="text-pink-400 mb-3 h-8 w-8" /> }
import { Users, Sparkles, Heart } from "lucide-react";