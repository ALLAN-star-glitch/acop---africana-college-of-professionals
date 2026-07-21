/* eslint-disable @typescript-eslint/no-explicit-any */
// app/workshops/tag/[tag]/page.tsx
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { getAllNews, formatDate, getNewsTypeDisplayName, decodeHtmlEntities } from '@/lib/wordpress';
import { ChevronRight, ShieldCheck } from 'lucide-react';

// Enable ISR - revalidate every 1 month
export const revalidate = 2592000;

// Generate static params for all tags
export async function generateStaticParams() {
  const allNews = await getAllNews();
  const tagsSet = new Set<string>();
  
  allNews.forEach((article: any) => {
    if (article.newsTags?.nodes && article.newsMetadata?.newsType?.includes('event')) {
      article.newsTags.nodes.forEach((tag: any) => {
        tagsSet.add(tag.slug);
      });
    }
  });
  
  return Array.from(tagsSet).map((tag) => ({ tag }));
}

// Helper to clean excerpt
const cleanExcerpt = (text: string | null | undefined, maxLength: number = 120): string => {
  if (!text) return '';
  const decoded = decodeHtmlEntities(text);
  const plainText = decoded.replace(/<[^>]*>/g, '');
  const cleaned = plainText.replace(/\s+/g, ' ').trim();
  if (cleaned.length <= maxLength) return cleaned;
  return cleaned.substring(0, maxLength) + '...';
};

export default async function WorkshopTagPage({ params }: { params: Promise<{ tag: string }> }) {
  const { tag } = await params;
  const allNews = await getAllNews();
  
  // Filter articles that have the matching tag AND are events/workshops
  const filteredArticles = allNews.filter((article: any) => 
    article.newsMetadata?.newsType?.includes('event') &&
    article.newsTags?.nodes?.some((tagNode: any) => tagNode.slug === tag)
  );
  
  if (filteredArticles.length === 0) {
    notFound();
  }
  
  // Get the tag name from the first article for display
  const tagName = filteredArticles[0]?.newsTags?.nodes?.find((t: any) => t.slug === tag)?.name || tag;
  
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-orange-500 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Workshops Tagged: #{tagName}
          </h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Showing {filteredArticles.length} workshop{filteredArticles.length !== 1 ? 's' : ''} with this tag
          </p>
          <Link
            href="/verify"
            className="inline-flex items-center gap-2 mt-6 bg-white text-purple-700 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            <ShieldCheck className="w-5 h-5" />
            Verify Certificate
          </Link>
        </div>
      </section>
      
      {/* Workshops Grid */}
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article: any) => {
            const featuredImage = article.featuredImage?.node?.sourceUrl || null;
            const newsType = getNewsTypeDisplayName(article.newsMetadata?.newsType || []);
            const excerpt = article.excerpt 
              ? cleanExcerpt(article.excerpt, 120)
              : cleanExcerpt(article.newsMetadata?.body || '', 120);
            
            return (
              <article key={article.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow group">
                {featuredImage && (
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={featuredImage}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      unoptimized
                    />
                  </div>
                )}
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-semibold text-purple-600 uppercase">{newsType}</span>
                    <span className="text-xs text-gray-400">{formatDate(article.date)}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">
                    <Link href={`/workshops/${article.slug}`} className="hover:text-purple-600 transition-colors">
                      {article.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-3">{excerpt}</p>
                  <Link href={`/workshops/${article.slug}`} className="inline-flex items-center text-purple-600 font-semibold text-sm hover:text-orange-600 transition-colors">
                    Read More <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </main>
  );
}