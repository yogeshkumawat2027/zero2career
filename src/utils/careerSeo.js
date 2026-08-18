export function buildCareerMetadata({
  title,
  slug,
  description,
  noIndex = false,
}) {
  const canonical = `https://zero2career.in/careers/${slug}`;

  return {
    title: `${title} Career Guide | Zero2Career`,
    description,
    alternates: {
      canonical,
    },
    robots: {
      index: !noIndex,
      follow: true,
    },
    openGraph: {
      title: `${title} Career Guide`,
      description,
      url: canonical,
      type: 'article',
      siteName: 'Zero2Career',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} Career Guide`,
      description,
    },
  };
}

export function titleFromSlug(slug) {
  return slug
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}
