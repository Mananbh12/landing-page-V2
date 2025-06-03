/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://www.mitra-sol.com',
    generateRobotsTxt: true, // Génère automatiquement robots.txt
    changefreq: 'monthly',   // Fréquence de mise à jour suggérée
    priority: 0.7,           // Priorité par défaut des pages
    sitemapSize: 5000,       // Limite par sitemap
    exclude: ['/admin', '/dashboard'], // Si tu as des routes à exclure du SEO
    robotsTxtOptions: {
      policies: [
        {
          userAgent: '*',
          allow: '/',
          disallow: ['/admin', '/dashboard'], // Adapte si besoin
        },
      ],
    },
  };
  