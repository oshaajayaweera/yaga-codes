import React, { useState, useEffect } from 'react';
import VaporizeTextCycle, { Tag } from '@/components/ui/vapour-text-effect';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, ArrowRight, Facebook, Instagram, Youtube, Linkedin } from "lucide-react";
import { SEO } from '@/components/seo';
import { useTheme } from '@/components/theme-provider';
import { WhatsAppIcon } from '@/components/icons/WhatsAppIcon';
import { TikTokIcon } from '@/components/icons/TikTokIcon';

export default function ContactPage() {
  const [subject, setSubject] = useState("Project Inquiry");
  const [headerFontSize, setHeaderFontSize] = useState("64px");
  const { theme } = useTheme();

  useEffect(() => {
    const updateHeaderSize = () => {
      if (window.innerWidth < 400) {
        setHeaderFontSize("32px");
      } else if (window.innerWidth < 640) {
        setHeaderFontSize("40px");
      } else if (window.innerWidth < 1024) {
        setHeaderFontSize("50px");
      } else {
        setHeaderFontSize("64px");
      }
    };
    updateHeaderSize();
    window.addEventListener('resize', updateHeaderSize);
    return () => window.removeEventListener('resize', updateHeaderSize);
  }, []);

  const getPlaceholder = (sub: string) => {
    switch (sub) {
      case "Freelance Opportunity":
        return "Tell me about the project scope, timeline, and what you're looking for...";
      case "General Question":
        return "What's on your mind?";
      case "Project Inquiry":
      default:
        return "Tell me about your project details, goals, and timeline...";
    }
  };

  // Buffer used to prevent particle clipping on the left.
  // IMPORTANT: textOffset MUST match the buffer so the visible text stays aligned
  // with the content below (paragraph/cards), while the canvas has extra room.
  const LEFT_BUFFER_PX = 120;

  return (
    <main className="min-h-screen w-full bg-background pt-32 px-6 md:px-20 pb-32">
      <SEO
        title="Contact Oshadha Jayaweera - Let's Collaborate"
        description="Get in touch with Oshadha Jayaweera for freelance digital marketing projects, content strategy, and creative direction in Sri Lanka."
        keywords={["Contact", "Freelance", "Hire Digital Marketer", "Sri Lanka"]}
      />

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left Side: Text & Info */}
        <div className="flex flex-col space-y-8">
          {/* 
            FIX:
            - Expand the heading container width by LEFT_BUFFER_PX
            - Shift container left by LEFT_BUFFER_PX
            - Set textOffset to the LEFT_BUFFER_PX + small optical adjustment
            Result: canvas has extra left room (no clipping) AND text stays aligned to the column.
          */}
          <div
            className="relative h-[140px] overflow-visible"
            style={{
              width: `calc(100% + ${LEFT_BUFFER_PX}px)`,
              marginLeft: `-${LEFT_BUFFER_PX}px`,
            }}
          >
            <VaporizeTextCycle
              texts={["Let's Talk", "Collaborate", "Create"]}
              font={{
                fontFamily: "Inter, sans-serif",
                fontSize: headerFontSize,
                fontWeight: 700
              }}
              color={theme === 'light' ? "rgb(0, 0, 0)" : "rgb(255, 255, 255)"}
              alignment="left"
              tag={Tag.H1}
              textOffset={LEFT_BUFFER_PX + 5}
            />
          </div>

          <div className="-mt-4">
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-md">
              Creating meaningful digital experiences for brands and startups.
              Available for freelance projects and open to collaboration.
            </p>
          </div>

          <div className="grid gap-6">
            <Card className="bg-card/40 border-border hover:border-foreground/20 transition-colors group backdrop-blur-sm">
              <CardContent className="p-6 flex items-center gap-6">
                <div className="h-12 w-12 rounded-full bg-foreground/5 flex items-center justify-center group-hover:bg-foreground/10 transition-colors border border-border">
                  <Mail className="h-5 w-5 text-foreground" />
                </div>
                <div>
                  <h3 className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-1">Email</h3>
                  <p className="text-lg font-medium text-foreground">work.oshadha@gmail.com</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/40 border-border hover:border-foreground/20 transition-colors group backdrop-blur-sm">
              <CardContent className="p-6 flex items-center gap-6">
                <div className="h-12 w-12 rounded-full bg-foreground/5 flex items-center justify-center group-hover:bg-foreground/10 transition-colors border border-border">
                  <MapPin className="h-5 w-5 text-foreground" />
                </div>
                <div>
                  <h3 className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-1">Based In</h3>
                  <p className="text-lg font-medium text-foreground">Sri Lanka</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="pt-4">
            <h3 className="text-xs font-mono text-muted-foreground mb-6 uppercase tracking-widest">Social Presence</h3>
            <div className="flex gap-4 flex-wrap">
              {[
                { icon: Linkedin, href: "https://www.linkedin.com/in/oshadhajayaweera", label: "LinkedIn" },
                { icon: Facebook, href: "https://www.facebook.com/oshaajay", label: "Facebook" },
                { icon: Instagram, href: "https://www.instagram.com/oshaa_jay", label: "Instagram" },
                { icon: WhatsAppIcon, href: "https://wa.me/+94772288613", label: "WhatsApp" },
                { icon: Youtube, href: "https://www.youtube.com/@thekiriya", label: "YouTube" },
                { icon: TikTokIcon, href: "https://www.tiktok.com/@thekiriya", label: "TikTok" }
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full h-12 w-12 border-border bg-background/5 hover:bg-foreground hover:text-background text-foreground transition-all duration-300"
                  >
                    {/* @ts-ignore */}
                    <social.icon className="h-5 w-5" />
                  </Button>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-purple-500/10 to-transparent blur-3xl -z-10 rounded-full opacity-40" />
          <Card className="bg-card/60 border-border backdrop-blur-xl shadow-2xl">
            <CardHeader className="space-y-2 pb-8">
              <CardTitle className="text-2xl font-light text-foreground">Send a message</CardTitle>
              <CardDescription className="text-muted-foreground">
                Fill out the form below and I'll get back to you shortly.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Name</label>
                    <input
                      type="text"
                      className="w-full bg-background/5 border border-border rounded-md p-3 text-foreground focus:outline-none focus:border-foreground/20 focus:ring-1 focus:ring-foreground/20 transition-all placeholder:text-muted-foreground font-light"
                      placeholder="Oshadha jayaweera"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Email</label>
                    <input
                      type="email"
                      className="w-full bg-background/5 border border-border rounded-md p-3 text-foreground focus:outline-none focus:border-foreground/20 focus:ring-1 focus:ring-foreground/20 transition-all placeholder:text-muted-foreground font-light"
                      placeholder="work.oshadha@gmail.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Subject</label>
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full bg-background/5 border border-border rounded-md p-3 text-foreground focus:outline-none focus:border-foreground/20 focus:ring-1 focus:ring-foreground/20 transition-all text-muted-foreground font-light cursor-pointer"
                  >
                    <option value="Project Inquiry">Project Inquiry</option>
                    <option value="Freelance Opportunity">Freelance Opportunity</option>
                    <option value="General Question">General Question</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Message</label>
                  <textarea
                    rows={6}
                    className="w-full bg-background/5 border border-border rounded-md p-3 text-foreground focus:outline-none focus:border-foreground/20 focus:ring-1 focus:ring-foreground/20 transition-all placeholder:text-muted-foreground font-light resize-none"
                    placeholder={getPlaceholder(subject)}
                  />
                </div>

                <Button className="w-full h-12 bg-foreground text-background hover:bg-foreground/90 text-sm font-medium rounded-md tracking-wide transition-all duration-300 mt-2">
                  Send Message <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}