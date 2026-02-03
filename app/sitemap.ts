import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://reliantroofers.co.uk'; // Update with your actual domain

  const routes = [
    '',
    '/about',
    '/gallery',
    '/contact',
    '/services',
    '/services/pitched-roofing',
    '/services/flat-roofing',
    '/services/new-roofs-construction',
    '/services/loft-conversions',
    '/services/repairs-maintenance',
    '/services/additional-services',
    '/services/roofing-materials',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));
}

