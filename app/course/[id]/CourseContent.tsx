'use client';

import { type Course } from '@/lib/courseData';

interface CourseContentProps {
  course: Course;
}

export default function CourseContent({ course }: CourseContentProps) {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <article itemScope itemType="https://schema.org/Course">
        {/* Course Header */}
        <header className="mb-8">
          <h1 
            itemProp="name"
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            {course.name}
          </h1>
          
          <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
            {course.instructor && (
              <span itemProp="instructor" itemScope itemType="https://schema.org/Person">
                By <span itemProp="name" className="font-medium">{course.instructor}</span>
              </span>
            )}
            {course.level && (
              <span>
                Level: <span className="font-medium">{course.level}</span>
              </span>
            )}
            {course.duration && (
              <span itemProp="timeRequired">
                Duration: <span className="font-medium">{course.duration}</span>
              </span>
            )}
          </div>

          {course.price && (
            <div 
              itemProp="offers" 
              itemScope 
              itemType="https://schema.org/Offer"
              className="text-2xl font-bold text-blue-600"
            >
              <span itemProp="price">${course.price}</span>
              <meta itemProp="priceCurrency" content="USD" />
            </div>
          )}
        </header>

        {/* Course Image */}
        {course.image && (
          <figure className="mb-8">
            <img
              src={course.image}
              alt={course.name}
              itemProp="image"
              className="w-full h-auto rounded-lg shadow-lg"
              width={1200}
              height={630}
              loading="eager"
            />
          </figure>
        )}

        {/* Course Description */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            About This Course
          </h2>
          <p 
            itemProp="description"
            className="text-gray-700 leading-relaxed text-lg"
          >
            {course.description}
          </p>
        </section>

        {/* What You'll Learn */}
        {course.learningOutcomes && course.learningOutcomes.length > 0 && (
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              What You'll Learn
            </h2>
            <ul className="space-y-2">
              {course.learningOutcomes.map((outcome, index) => (
                <li 
                  key={index}
                  className="flex items-start"
                >
                  <svg 
                    className="w-6 h-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M5 13l4 4L19 7" 
                    />
                  </svg>
                  <span className="text-gray-700">{outcome}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Provider Information */}
        <section 
          itemProp="provider" 
          itemScope 
          itemType="https://schema.org/Organization"
          className="bg-gray-50 rounded-lg p-6"
        >
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Course Provider
          </h2>
          <p className="text-gray-700">
            <span itemProp="name" className="font-medium">{course.provider.name}</span>
          </p>
          {course.provider.url && (
            <a
              href={course.provider.url}
              itemProp="sameAs"
              className="text-blue-600 hover:underline inline-block mt-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Provider Website
            </a>
          )}
        </section>

        {/* CTA Button */}
        <div className="mt-8 text-center">
          <button
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            onClick={() => alert('Enrollment feature would be implemented here')}
          >
            Enroll Now
          </button>
        </div>
      </article>
    </main>
  );
}
