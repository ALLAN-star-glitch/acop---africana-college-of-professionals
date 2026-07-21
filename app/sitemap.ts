// app/sitemap.ts
import { MetadataRoute } from 'next'
import { getAllNews, getAllTags, getAllNewsSlugs } from '@/lib/wordpress'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.acop.co.ke'
  
  // 1. Static routes (pages that never change)
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/news`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/workshops`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/courses`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/admission`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/verify`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/become-an-author`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/get-started`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
  ]
  
  // 2. Dynamic routes from WordPress (news articles)
  const allNews = await getAllNews()
  const newsRoutes: MetadataRoute.Sitemap = allNews.map((article) => ({
    url: `${baseUrl}/news/${article.slug}`,
    lastModified: new Date(article.date),
    changeFrequency: 'weekly',
    priority: 0.7,
  }))
  
  // 3. Workshop routes (only for event-type posts)
  const allArticles = await getAllNews()
  const workshopRoutes: MetadataRoute.Sitemap = allArticles
    .filter(article => article.newsMetadata?.newsType?.includes('event'))
    .map((article) => ({
      url: `${baseUrl}/workshops/${article.slug}`,
      lastModified: new Date(article.date),
      changeFrequency: 'weekly',
      priority: 0.8,
    }))
  
  // 4. Workshop access routes (password-protected pages)
  const workshopAccessRoutes: MetadataRoute.Sitemap = allArticles
    .filter(article => article.newsMetadata?.newsType?.includes('event'))
    .map((article) => ({
      url: `${baseUrl}/workshop/${article.slug}`,
      lastModified: new Date(article.date),
      changeFrequency: 'weekly',
      priority: 0.5, // Lower priority as they're password-protected
    }))
  
  // 5. Tag pages (for better SEO)
  const allTags = await getAllTags()
  const tagRoutes: MetadataRoute.Sitemap = allTags.map((tag) => ({
    url: `${baseUrl}/news/tag/${tag.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.6,
  }))
  
  // 6. Workshop tag pages
  const workshopTagRoutes: MetadataRoute.Sitemap = allTags.map((tag) => ({
    url: `${baseUrl}/workshops/tag/${tag.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.5,
  }))
  
  return [
    ...staticRoutes,
    ...newsRoutes,
    ...workshopRoutes,
    ...workshopAccessRoutes,
    ...tagRoutes,
    ...workshopTagRoutes,
  ]
}