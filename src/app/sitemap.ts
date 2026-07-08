import type { MetadataRoute } from 'next';
import { getIndustrySlugs } from '@/content/solutions/industries';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://delivero.app';
  const now = new Date().toISOString();
  const solutionPaths = ['/solutions', ...getIndustrySlugs().map((slug) => `/solutions/${slug}`)];
  return [
    '/',
    '/features',
    '/screenshots',
    '/pricing',
    '/faq',
    '/contact',
    '/terms',
    '/privacy',
    ...solutionPaths,
  ].map((path) => ({ url: `${base}${path}`, lastModified: now, changeFrequency: 'weekly', priority: path === '/' ? 1 : 0.7 }));
}
