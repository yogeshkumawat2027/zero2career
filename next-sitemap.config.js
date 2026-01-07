/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://zero2career.in',
  generateRobotsTxt: true, // (optional) Generate a robots.txt file
  generateIndexSitemap: false, // (optional) Don't generate separate index sitemap for large sites
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 7000,
  // Remove unused namespaces
  additionalSitemaps: [],
  exclude: [
    '/404',
    '/500',
    '/api/*', // Exclude all API routes
    '/admin/*', // Exclude admin routes if any
    '/private/*', // Exclude private routes if any
  ],
  // Define custom paths with specific configurations
  additionalPaths: async (config) => {
    return [
      // Career pages with high priority
      {
        loc: '/careers/pilot',
        changefreq: 'weekly',
        priority: 0.9,
        lastmod: new Date().toISOString(),
      },
      {
        loc: '/careers/advocate',
        changefreq: 'weekly', 
        priority: 0.9,
        lastmod: new Date().toISOString(),
      },
      {
        loc: '/careers/actuarial-scientist',
        changefreq: 'weekly',
        priority: 0.9,
        lastmod: new Date().toISOString(),
      },
      {
        loc: '/careers/web-developer',
        changefreq: 'weekly',
        priority: 0.9,
        lastmod: new Date().toISOString(),
      },
      {
        loc: '/careers/ux-ui-designer',
        changefreq: 'weekly',
        priority: 0.9,
        lastmod: new Date().toISOString(),
      },
      {
        loc: '/careers/software-developer',
        changefreq: 'weekly',
        priority: 0.9,
        lastmod: new Date().toISOString(),
      },
      {
        loc: '/careers/animator',
        changefreq: 'weekly',
        priority: 0.8,
        lastmod: new Date().toISOString(),
      },
      {
        loc: '/careers/doctor',
        changefreq: 'weekly',
        priority: 0.8,
        lastmod: new Date().toISOString(),
      },
      {
        loc: '/careers/ips',
        changefreq: 'weekly',
        priority: 0.8,
        lastmod: new Date().toISOString(),
      },
      // Main pages with high priority
      {
        loc: '/',
        changefreq: 'daily',
        priority: 1.0,
        lastmod: new Date().toISOString(),
      },
      {
        loc: '/careers',
        changefreq: 'daily',
        priority: 0.9,
        lastmod: new Date().toISOString(),
      },
      {
        loc: '/services',
        changefreq: 'weekly',
        priority: 0.8,
        lastmod: new Date().toISOString(),
      },
      {
        loc: '/aboutus',
        changefreq: 'monthly',
        priority: 0.6,
        lastmod: new Date().toISOString(),
      },
      {
        loc: '/contact',
        changefreq: 'monthly',
        priority: 0.5,
        lastmod: new Date().toISOString(),
      },
    ];
  },
  // Robots.txt configuration
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/private/'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        crawlDelay: 1,
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        crawlDelay: 2,
      },
    ],
    additionalSitemaps: [
      'https://zero2career.in/sitemap.xml',
    ],
  },
  // Transform each URL before adding to sitemap
  transform: async (config, path) => {
    // Custom priority logic based on path
    let priority = config.priority;
    let changefreq = config.changefreq;

    // High priority for main pages
    if (path === '/') {
      priority = 1.0;
      changefreq = 'daily';
    } else if (path === '/careers') {
      priority = 0.9;
      changefreq = 'daily';
    } else if (path.startsWith('/careers/')) {
      priority = 0.8;
      changefreq = 'weekly';
    } else if (path === '/services') {
      priority = 0.8;
      changefreq = 'weekly';
    } else if (path === '/aboutus' || path === '/contact') {
      priority = 0.6;
      changefreq = 'monthly';
    }

    return {
      loc: path,
      changefreq: changefreq,
      priority: priority,
      lastmod: new Date().toISOString(),
    };
  },
};