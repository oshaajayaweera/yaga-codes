import React from 'react';
import { Eye, ThumbsUp } from "lucide-react";

// --- Blog Data ---
export const BLOG_POSTS = [
  {
    id: 'sl-trends-2025',
    title: 'Digital Marketing Trends in Sri Lanka 2025',
    subtitle: 'What’s actually working right now vs what’s dead.',
    date: 'Oct 12, 2024',
    readTime: '5 min read',
    category: 'Trends',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070',
    stats: [
        { icon: <Eye size={14}/>, value: '2.4k' },
        { icon: <ThumbsUp size={14}/>, value: '142' }
    ]
  },
  {
    id: 'campaign-planning',
    title: 'My Campaign Planning Blueprint',
    subtitle: 'How I structure campaigns before opening Ads Manager.',
    date: 'Sep 28, 2024',
    readTime: '7 min read',
    category: 'Strategy',
    image: 'https://images.unsplash.com/photo-1512314889357-e157c22f938d?auto=format&fit=crop&q=80&w=2071',
    stats: [
        { icon: <Eye size={14}/>, value: '1.8k' },
        { icon: <ThumbsUp size={14}/>, value: '98' }
    ]
  },
  {
    id: 'strategy-fail',
    title: 'Why Most Strategies Fail',
    subtitle: 'The common mistakes brands make and the fix.',
    date: 'Aug 15, 2024',
    readTime: '6 min read',
    category: 'Insight',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=2071',
    stats: [
        { icon: <Eye size={14}/>, value: '3.1k' },
        { icon: <ThumbsUp size={14}/>, value: '210' }
    ]
  }
];