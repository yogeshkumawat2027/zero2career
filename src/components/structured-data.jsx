import React from 'react';

export default function StructuredData({ data, type = "Organization" }) {
  const generateStructuredData = () => {
    switch (type) {
      case "Organization":
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Zero2Career",
          "url": "https://zero2career.in",
          "logo": "https://zero2career.in/logo.png",
          "description": "India's most trusted career guidance platform for students after 10th & 12th",
          "founder": {
            "@type": "Person", 
            "name": "Zero2Career Team"
          },
          "foundingDate": "2024",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "India"
          },
          "sameAs": [
            "https://www.instagram.com/zero2career",
            "https://www.youtube.com/@zero2career",
            "https://www.linkedin.com/company/zero2career"
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer service",
            "email": "contact@zero2career.in"
          }
        };

      case "WebSite":
        return {
          "@context": "https://schema.org",
          "@type": "WebSite", 
          "name": "Zero2Career",
          "url": "https://zero2career.in",
          "description": "Explore 100+ career options after 10th & 12th with complete guidance",
          "publisher": {
            "@type": "Organization",
            "name": "Zero2Career"
          },
          "potentialAction": {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://zero2career.in/careers/{search_term_string}"
            },
            "query-input": "required name=search_term_string"
          }
        };

      case "BreadcrumbList":
        return {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": data.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": item.url
          }))
        };

      case "Article":
        return {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": data.title,
          "description": data.description,
          "image": data.image,
          "author": {
            "@type": "Organization",
            "name": "Zero2Career"
          },
          "publisher": {
            "@type": "Organization", 
            "name": "Zero2Career",
            "logo": {
              "@type": "ImageObject",
              "url": "https://zero2career.in/logo.png"
            }
          },
          "datePublished": data.datePublished || new Date().toISOString(),
          "dateModified": data.dateModified || new Date().toISOString(),
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": data.url
          }
        };

      case "FAQPage":
        return {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": data.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer", 
              "text": faq.answer
            }
          }))
        };

      default:
        return data;
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(generateStructuredData())
      }}
    />
  );
}

// Career specific structured data
export function CareerStructuredData({ career }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": career.title,
    "description": career.description,
    "image": career.image,
    "author": {
      "@type": "Organization",
      "name": "Zero2Career"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Zero2Career",
      "logo": {
        "@type": "ImageObject", 
        "url": "https://zero2career.in/logo.png"
      }
    },
    "datePublished": new Date().toISOString(),
    "dateModified": new Date().toISOString(),
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": career.url
    },
    "keywords": career.keywords,
    "articleSection": "Career Guidance",
    "inLanguage": "en-IN"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData)
      }}
    />
  );
}