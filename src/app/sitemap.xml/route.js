import { careersList } from '../career';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || process.env.API_URL || 'https://zero2career.in';

export const dynamic = 'force-static';
export const revalidate = 3600;

export async function GET() {
  const baseUrl = 'https://zero2career.in';
  const currentDate = new Date().toISOString();

  const careerPaths = careersList
    .map((career) => career.link)
    .filter((link) => typeof link === 'string' && link.startsWith('/careers/'))
    .filter((link) => link !== '/careers/demo')
    .map((link) => link.replace('/careers/', ''));

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
    <loc>${baseUrl}/about</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>${baseUrl}/privacy-policy</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.4</priority>
  </url>
  <url>
    <loc>${baseUrl}/terms-and-conditions</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.4</priority>
  </url>
  <url>
    <loc>${baseUrl}/disclaimer</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.4</priority>
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
    <loc>${baseUrl}/about</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>${baseUrl}/privacy-policy</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.4</priority>
  </url>
  <url>
    <loc>${baseUrl}/terms-and-conditions</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.4</priority>
  </url>
  <url>
    <loc>${baseUrl}/disclaimer</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.4</priority>
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
