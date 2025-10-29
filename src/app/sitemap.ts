import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://fooddistribution.app';
  const now = new Date().toISOString();
  return [
    '/',
    '/features',
    '/screenshots',
    '/pricing',
    '/faq',
    '/contact',
  ].map((path) => ({ url: `${base}${path}`, lastModified: now, changeFrequency: 'weekly', priority: path === '/' ? 1 : 0.7 }));
}


