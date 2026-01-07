const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || process.env.API_URL || 'https://zero2career.in';

export const dynamic = 'force-static';
export const revalidate = 3600;

export async function GET() {
  const baseUrl = 'https://zero2career.in';
  const currentDate = new Date().toISOString();

  // Define all career paths
  const careerPaths = [
    'pilot', 'advocate', 'actuarial-scientist', 'web-developer', 'ux-ui-designer',
    'software-developer', 'animator', 'doctor', 'ips', 'ias', 'indian-navy-pilot',
    'aeronautical-engineer', 'ai-ml-engineer', 'air-hostess', 'air-traffic-controller',
    'architect', 'archaeologist', 'bsf-officer', 'bank-po', 'cbi-officer',
    'biologist', 'chef', 'chemist', 'ca', 'army', 'cloud-engineer',
    'content-writer', 'civil-engineer', 'crpf-officer', 'cyber-security-manager',
    'cyber-security', 'data-analyst', 'delhi-police-constable', 'data-science',
    'devops-engineer', 'digital-marketer', 'drdo-scientist', 'electrical-engineer',
    'engineer', 'ethical-hacker', 'environmental-scientist', 'event-manager',
    'fashion-designer', 'fashion-photographer', 'film-director', 'financial-analyst',
    'foreign-service-officer', 'forensic-scientist', 'full-stack-developer',
    'game-developer', 'geologist', 'graphic-designer', 'hotel-manager',
    'hr-manager', 'iaf-pilot', 'ib-officer', 'ibps-clerk', 'ifs',
    'income-tax-inspector', 'isro-scientist', 'investment-banker', 'journalist',
    'lic-aao', 'librarian', 'marine-biologist', 'marine-engineer',
    'marketing-manager', 'mechanical-engineer', 'mechatronics-engineer',
    'music-producer', 'mobile-app-developer', 'nabard-officer', 'nurse',
    'pharmacist', 'paramedic', 'photographer', 'police-officer',
    'physiotherapist', 'product-manager', 'psychologist', 'railway-group-d',
    'railway-loco-pilot', 'research-scientist', 'raw-agent', 'robotics-engineer',
    'sebi-officer', 'sbi-po', 'singer-musician', 'sports-coach', 'ssc-cgl',
    'social-media-manager', 'stockbroker', 'ssc-chsl', 'teacher-professor',
    'upsc-nda', 'tv-print-journalist', 'vfx-artist', 'vet-doctor'
  ];

  // Initialize empty arrays for updates
  let govtUpdates = [];
  let profUpdates = [];

  try {
    // Try to fetch govt updates (may fail during build)
    try {
      const govtResponse = await fetch(`${API_BASE_URL}/api/v1/govt-updates`, {
        next: { revalidate: 3600 }
      });
      if (govtResponse.ok) {
        const govtData = await govtResponse.json();
        govtUpdates = govtData.data || [];
      }
    } catch (error) {
      console.log('Could not fetch govt updates for sitemap, using empty array');
    }

    // Try to fetch professional updates (may fail during build)
    try {
      const profResponse = await fetch(`${API_BASE_URL}/api/v1/professional-updates`, {
        next: { revalidate: 3600 }
      });
      if (profResponse.ok) {
        const profData = await profResponse.json();
        profUpdates = profData.data || [];
      }
    } catch (error) {
      console.log('Could not fetch professional updates for sitemap, using empty array');
    }

    // Build govt updates URLs
    const govtUpdateUrls = govtUpdates.map(update => `  <url>
    <loc>${baseUrl}/govt-updates/${update.slug}</loc>
    <lastmod>${new Date(update.updatedAt || update.createdAt).toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`).join('\n');

    // Build professional updates URLs
    const profUpdateUrls = profUpdates.map(update => `  <url>
    <loc>${baseUrl}/professional-updates/${update.slug}</loc>
    <lastmod>${new Date(update.updatedAt || update.createdAt).toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`).join('\n');

    // Build XML sitemap
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${baseUrl}/careers</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${baseUrl}/govt-updates</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${baseUrl}/professional-updates</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${baseUrl}/services</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${baseUrl}/aboutus</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>${baseUrl}/contact</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>
  <url>
    <loc>${baseUrl}/premium</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
${careerPaths.map(career => `  <url>
    <loc>${baseUrl}/careers/${career}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`).join('\n')}
${govtUpdateUrls}
${profUpdateUrls}
</urlset>`;

    return new Response(sitemap, {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=3600, s-maxage=3600',
      },
    });
  } catch (error) {
    console.error('Error generating sitemap:', error);
    
    // Fallback sitemap without dynamic updates
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${baseUrl}/careers</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${baseUrl}/govt-updates</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${baseUrl}/professional-updates</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${baseUrl}/services</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${baseUrl}/aboutus</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>${baseUrl}/contact</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>
  <url>
    <loc>${baseUrl}/premium</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
${careerPaths.map(career => `  <url>
    <loc>${baseUrl}/careers/${career}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`).join('\n')}
</urlset>`;

    return new Response(sitemap, {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=0, must-revalidate',
      },
    });
  }
}
