import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SeoProps {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  type?: 'website' | 'article' | 'profile';
  schema?: Record<string, any>;
  author?: string;
  publishedTime?: string;
  canonicalUrl?: string;
}

export const SEO: React.FC<SeoProps> = ({
  title,
  description,
  keywords,
  image,
  type = 'website',
  schema,
  author,
  publishedTime,
  canonicalUrl
}) => {
  const location = useLocation();
  const domain = 'https://oshadha.me';
  const currentUrl = canonicalUrl || `${domain}${location.pathname}`;
  const defaultImage = `${domain}/jay-icon.png`;
  const metaImage = image ? (image.startsWith('http') ? image : `${domain}${image}`) : defaultImage;

  useEffect(() => {
    // Update Title
    document.title = title.includes("Oshadha") ? title : `${title} | Oshadha Jayaweera`;

    // Helper to update or create meta tag
    const updateMeta = (name: string, content: string, attribute: 'name' | 'property' = 'name') => {
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Helper for link tags
    const updateLink = (rel: string, href: string) => {
        let element = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;
        if (!element) {
            element = document.createElement('link');
            element.setAttribute('rel', rel);
            document.head.appendChild(element);
        }
        element.setAttribute('href', href);
    }

    // Basic Meta
    updateMeta('description', description);
    
    const defaultKeywords = [
        "Oshadha Jayaweera", "Oshadha", "Jayaweera", "Oshada",
        "Digital marketer Sri Lanka", "Content creator Sri Lanka", "Meta ads Sri Lanka",
        "Social media marketing Sri Lanka", "Photography Sri Lanka", "Videography Sri Lanka",
        "Event photography Sri Lanka", "Bandarawela photographer", "Bandarawela videographer",
        "Creative direction Sri Lanka"
    ];
    
    const allKeywords = keywords ? [...defaultKeywords, ...keywords] : defaultKeywords;
    updateMeta('keywords', allKeywords.join(', '));
    
    updateMeta('author', author || 'Oshadha Jayaweera');
    updateMeta('robots', 'index, follow');

    // Open Graph
    updateMeta('og:title', title, 'property');
    updateMeta('og:description', description, 'property');
    updateMeta('og:type', type, 'property');
    updateMeta('og:url', currentUrl, 'property');
    updateMeta('og:image', metaImage, 'property');
    updateMeta('og:site_name', 'Oshadha Jayaweera Portfolio', 'property');

    if (type === 'article' && publishedTime) {
        updateMeta('article:published_time', publishedTime, 'property');
        updateMeta('article:author', author || 'Oshadha Jayaweera', 'property');
    }

    // Twitter
    updateMeta('twitter:card', 'summary_large_image');
    updateMeta('twitter:title', title);
    updateMeta('twitter:description', description);
    updateMeta('twitter:image', metaImage);
    updateMeta('twitter:creator', '@thekiriya');

    // Canonical
    updateLink('canonical', currentUrl);

    // JSON-LD
    const scriptId = 'dynamic-schema-json-ld';
    let script = document.querySelector(`#${scriptId}`);
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.setAttribute('type', 'application/ld+json');
      document.head.appendChild(script);
    }
    
    if (schema) {
      script.textContent = JSON.stringify(schema);
    } else {
        // Default Person Schema if no specific schema provided
        const personSchema = {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Oshadha Jayaweera",
            "url": domain,
            "image": defaultImage,
            "sameAs": [
                "https://www.instagram.com/oshaa_jay",
                "https://www.linkedin.com/in/oshadhajayaweera",
                "https://www.tiktok.com/@thekiriya",
                "https://www.youtube.com/@oshadhajay",
                "https://www.facebook.com/oshaajay"
            ],
            "jobTitle": "Digital Marketer",
            "worksFor": {
                "@type": "Organization",
                "name": "Freelance"
            },
            "description": description
        };
        script.textContent = JSON.stringify(personSchema);
    }

  }, [title, description, keywords, metaImage, currentUrl, type, schema, author, publishedTime]);

  return null;
};