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
