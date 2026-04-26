import { NewsArticle, formatDate, getExcerpt } from '@/lib/wordpress'
import Link from 'next/link'
import Image from 'next/image'

interface NewsCardProps {
  article: NewsArticle
}

// Helper to get category display name
function getCategoryDisplayName(categories: { name: string; slug: string }[] | undefined): string {
  if (!categories || categories.length === 0) return 'News'
  
  // Get the first category name
  const categoryName = categories[0].name
  
  // You can map specific slugs to custom display names if needed
  const displayNames: Record<string, string> = {
    admissions: 'Admissions',
    events: 'Events',
    blog: 'Blog',
    news: 'News',
  }
  
  return displayNames[categoryName.toLowerCase()] || categoryName
}

export function NewsCard({ article }: NewsCardProps) {
  const metadata = article.newsMetadata
  const featuredImageUrl = metadata?.featuredImage?.node?.mediaItemUrl
  const excerpt = metadata?.excerpt || getExcerpt(metadata?.body || '', 120)
  
  // Get the real WordPress category name
  const categoryName = getCategoryDisplayName(article.newsCategories?.nodes)

  return (
    <article className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
      {featuredImageUrl && (
        <div className="relative h-48 w-full">
          <Image
            src={featuredImageUrl}
            alt={article.title}
            fill
            className="object-cover"
            unoptimized
          />
        </div>
      )}
      <div className="p-5">
        <span className="text-xs font-semibold text-orange-600 uppercase">
          {categoryName}
        </span>
        <h3 className="text-xl font-bold text-gray-800 mt-2 mb-2 line-clamp-2">
          <Link href={`/news/${article.slug}`} className="hover:text-orange-600">
            {article.title}
          </Link>
        </h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-3">
          {excerpt}
        </p>
        <div className="flex items-center justify-between text-xs text-gray-400">
          <span>{formatDate(article.date)}</span>
          <Link href={`/news/${article.slug}`} className="text-orange-600 font-medium">
            Read More →
          </Link>
        </div>
      </div>
    </article>
  )
}