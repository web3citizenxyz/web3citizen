/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://www.web3citizen.xyz',  // IMPORTANT: use the www version
    generateRobotsTxt: true,
    sitemapSize: 7000,
    changefreq: 'weekly',
    priority: 0.7,
    exclude: [],  // Add paths like '/private' if needed
    robotsTxtOptions: {
      policies: [
        { userAgent: 'GPTBot', allow: '/' },
        { userAgent: 'ClaudeBot', allow: '/' },
        { userAgent: '*', allow: '/' },
      ],
    },
  }
  