import { notFound } from 'next/navigation';
import WorkshopWrapper from '@/components/workshop/WorkshopWrapper';
import { getNewsBySlug, getAllNewsSlugs } from '@/lib/wordpress';
import type { Metadata } from 'next';

interface WorkshopAccessPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export const dynamicParams = true;
export const revalidate = 2592000; // 1 month

// Generate static paths at build time
export async function generateStaticParams() {
  const articles = await getAllNewsSlugs();
  return articles.map((article) => ({ slug: article.slug }));
}

// Helper to get event type display
function getEventTypeDisplay(type: string | null): { label: string; color: string } {
  const types: Record<string, { label: string; color: string }> = {
    workshop: { label: 'Workshop', color: 'bg-purple-600' },
    seminar: { label: 'Seminar', color: 'bg-blue-600' },
    conference: { label: 'Conference', color: 'bg-orange-600' },
    webinar: { label: 'Webinar', color: 'bg-green-600' },
    training: { label: 'Training', color: 'bg-red-600' },
    other: { label: 'Event', color: 'bg-gray-600' },
  };
  return types[type || 'other'] || types.other;
}

// Generate metadata dynamically from WordPress
export async function generateMetadata({
  params,
}: WorkshopAccessPageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await getNewsBySlug(slug);

  if (!article || !article.newsMetadata?.newsType?.includes('event')) {
    return {
      title: 'Workshop Access | Africana College of Professionals',
      description: 'Access your workshop session.',
    };
  }

  const workshopTitle = article.title;
  const workshopDate = article.newsMetadata?.eventDate || 'Date TBD';
  const eventType = article.newsMetadata?.eventType || 'workshop';
  const eventTypeDisplay = getEventTypeDisplay(eventType);

  const websiteUrl = 'https://www.acop.co.ke';
  const pageUrl = `${websiteUrl}/workshop/${slug}`;
  const ogImageUrl = article.featuredImage?.node?.sourceUrl || `${websiteUrl}/workshop.webp`;

  return {
    title: `${workshopTitle} (${eventTypeDisplay.label}) | Workshop Access | Africana College of Professionals`,
    description: `Access the ${workshopTitle} workshop session.`,
    robots: 'index, follow',
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: `${workshopTitle} (${eventTypeDisplay.label}) | Africana College of Professionals`,
      description: `Access the workshop session. ${workshopTitle}.`,
      url: pageUrl,
      siteName: 'Africana College of Professionals',
      type: 'website',
      images: [{ url: ogImageUrl, width: 1200, height: 630, alt: workshopTitle }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${workshopTitle} (${eventTypeDisplay.label}) | Africana College of Professionals`,
      description: `Access your workshop session.`,
      images: [ogImageUrl],
    },
  };
}

export default async function WorkshopAccessPage({
  params,
}: WorkshopAccessPageProps) {
  const { slug } = await params;

  const meetingLink = process.env.WORKSHOP_LINK || '';

  if (!slug || !meetingLink) {
    return notFound();
  }

  // Fetch the article using the same function as news
  const article = await getNewsBySlug(slug);

  // If no article found or not an event, return 404
  if (!article || !article.newsMetadata?.newsType?.includes('event')) {
    return notFound();
  }

  const metadata = article.newsMetadata;

  // Extract workshop details from WordPress
  const workshopTitle = article.title;
  const workshopDate = metadata?.eventDate || 'Date TBD';
  const workshopTime = metadata?.eventTime || 'Time TBD';
  const workshopVenue = metadata?.eventVenue || 'Online';
  const workshopEndDate = metadata?.eventenddate || null;

  // Get facilitator and program coordinator from WordPress
  const facilitator = metadata?.facilitator || 'Dr. Susan Gitau';
  const coordinator = metadata?.programCoordinator || 'Alice Songok';

  // Parse agenda items from the body content
  // This assumes agenda items are in a list format in the body
  const agendaItems: string[] = [];
  // You can parse the body to extract agenda items
  // For now, we'll use a default set if available
  // In the future, you can add an ACF field for agenda items

  // JSON-LD structured data for the workshop
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'EducationalEvent',
    name: workshopTitle,
    description: `Access the ${workshopTitle} workshop session for registered participants.`,
    startDate: workshopDate,
    endDate: workshopEndDate || workshopDate,
    organizer: {
      '@type': 'CollegeOrUniversity',
      name: 'Africana College of Professionals',
      url: 'https://www.acop.co.ke',
    },
    location: {
      '@type': 'VirtualLocation',
      url: meetingLink,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      <main className="min-h-screen">
        <WorkshopWrapper
          meetingLink={meetingLink}
          workshopTitle={workshopTitle}
          workshopDate={workshopDate}
          workshopTime={workshopTime}
          facilitator={facilitator}
          coordinator={coordinator}
          slug={slug}
          agendaItems={agendaItems}
        />
      </main>
    </>
  );
}