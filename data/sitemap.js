// This structure follows: https://www.sitemaps.org/protocol.html

const sitemap = [
  {
    url: '/',
    lastMod: true,
    changeFreq: 'weekly',
    priority: 1
  },
  {
    url: '/menu',
    lastMod: true,
    changeFreq: 'weekly',
    priority: 0.8
  },
  {
    url: '/frecuentes',
    lastMod: new Date('2022-04-01'),
    changeFreq: 'weekly',
    priority: 0.8
  },
  {
    url: '/ggj22',
    lastMod: new Date('2022-01-20'),
    changeFreq: 'monthly',
    priority: 0.1
  },
];

module.exports = sitemap;
