// app/sitemap.ts
import { MetadataRoute } from 'next'
import { getAllNews, getAllTags } from '@/lib/wordpress'

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
    }
  ]
  
  // 2. Dynamic routes from WordPress (news articles)
  const allNews = await getAllNews()
  const newsRoutes: MetadataRoute.Sitemap = allNews.map((article) => ({
    url: `${baseUrl}/news/${article.slug}`,
    lastModified: new Date(article.date),
    changeFrequency: 'weekly',
    priority: 0.7,
  }))
  
  // 3. Tag pages (for better SEO)
  const allTags = await getAllTags()
  const tagRoutes: MetadataRoute.Sitemap = allTags.map((tag) => ({
    url: `${baseUrl}/news/tag/${tag.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.6,
  }))
  
  return [...staticRoutes, ...newsRoutes, ...tagRoutes]
}