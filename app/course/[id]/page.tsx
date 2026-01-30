import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import CourseContent from './CourseContent';
import { getCourseById, type Course } from '@/lib/courseData';

interface PageProps {
  params: {
    id: string;
  };
}

// Generate dynamic metadata for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const course = await getCourseById(params.id);

  if (!course) {
    return {
      title: 'Course Not Found',
    };
  }

  const metaDescription = course.description.length > 160 
    ? `${course.description.substring(0, 157)}...` 
    : course.description;

  return {
    title: `${course.name} | ${course.provider.name}`,
    description: metaDescription,
    keywords: course.keywords,
    authors: [{ name: course.provider.name }],
    openGraph: {
      title: course.name,
      description: metaDescription,
      type: 'website',
      url: `https://example.com/course/${course.id}`,
      images: [
        {
          url: course.image,
          width: 1200,
          height: 630,
          alt: course.name,
        },
      ],
      siteName: 'Course Platform',
    },
    twitter: {
      card: 'summary_large_image',
      title: course.name,
      description: metaDescription,
      images: [course.image],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

// Server-side rendering with data fetching
export default async function CoursePage({ params }: PageProps) {
  const course = await getCourseById(params.id);

  if (!course) {
    notFound();
  }

  // Generate JSON-LD structured data for Google rich snippets
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: course.name,
    description: course.description,
    provider: {
      '@type': 'Organization',
      name: course.provider.name,
      sameAs: course.provider.url,
    },
    image: course.image,
    courseCode: course.id,
    ...(course.price && {
      offers: {
        '@type': 'Offer',
        price: course.price,
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
      },
    }),
    ...(course.instructor && {
      instructor: {
        '@type': 'Person',
        name: course.instructor,
      },
    }),
    ...(course.duration && {
      timeRequired: course.duration,
    }),
    ...(course.level && {
      educationalLevel: course.level,
    }),
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Course Content Component */}
      <CourseContent course={course} />
    </>
  );
}

// Generate static params for better performance (optional, but recommended)
export async function generateStaticParams() {
  // In a real app, you'd fetch all course IDs from your database
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
  ];
}
