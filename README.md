# SEO-Optimized Course Detail Page - Next.js

A high-performance, SEO-optimized Course Detail page built with Next.js App Router, featuring Server-Side Rendering (SSR), dynamic metadata generation, and JSON-LD structured data.

## Features

### 1. **Server-Side Rendering (SSR)**
- Fully server-rendered pages using Next.js App Router
- Async data fetching in Server Components
- Optimal SEO and initial page load performance

### 2. **Dynamic Metadata**
- Programmatically generated `<title>` tags
- Dynamic `<meta description>` with proper length constraints (160 chars)
- Open Graph (OG) tags for social media sharing
- Twitter Card metadata
- Proper robots meta tags

### 3. **Structured Data (JSON-LD)**
- Schema.org `Course` type implementation
- Rich snippets for Google search results
- Provider, instructor, and pricing information
- Semantic HTML with microdata attributes

### 4. **Performance Optimizations**
- Core Web Vitals optimized (90+ score target)
- Image optimization with Next.js Image component
- System fonts for instant text rendering
- Minimal CSS (Tailwind utility classes)
- Code splitting and lazy loading
- Content visibility optimization

### 5. **SEO Best Practices**
- Semantic HTML5 structure
- Proper heading hierarchy (h1 → h2)
- Alt text for images
- Descriptive link text
- Mobile-responsive viewport
- Fast page load times

## 📁 Project Structure

```
course-detail-page/
├── app/
│   ├── course/
│   │   └── [id]/
│   │       ├── page.tsx          # Main course page (SSR)
│   │       ├── CourseContent.tsx # Client component
│   │       └── not-found.tsx     # 404 page
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Home page
│   └── globals.css               # Global styles
├── lib/
│   └── courseData.ts             # Mock data service
├── next.config.js                # Next.js configuration
├── tailwind.config.js            # Tailwind CSS config
├── tsconfig.json                 # TypeScript config
└── package.json
```

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Rendering:** Server-Side Rendering (SSR)
- **Data:** Mock async data fetching

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🌐 Usage

Visit the following URLs to see the course detail pages:

- `http://localhost:3000/course/1` - Advanced React Patterns
- `http://localhost:3000/course/2` - Full-Stack Development
- `http://localhost:3000/course/3` - Machine Learning Fundamentals
- `http://localhost:3000/course/999` - Not Found (404) example

## 🎯 Key Implementation Details

### Dynamic Metadata Generation

```typescript
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const course = await getCourseById(params.id);
  
  return {
    title: `${course.name} | ${course.provider.name}`,
    description: course.description.substring(0, 160),
    openGraph: {
      title: course.name,
      description: course.description,
      images: [course.image],
    },
  };
}
```

### JSON-LD Structured Data

```typescript
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Course',
  name: course.name,
  description: course.description,
  provider: {
    '@type': 'Organization',
    name: course.provider.name,
  },
};
```

### Server-Side Rendering

```typescript
export default async function CoursePage({ params }: PageProps) {
  // Data fetching happens on the server
  const course = await getCourseById(params.id);
  
  if (!course) {
    notFound();
  }
  
  return <CourseContent course={course} />;
}
```

## 🏆 Performance Targets

This implementation is designed to achieve:

- **Performance Score:** 90+ (Lighthouse)
- **SEO Score:** 90+ (Lighthouse)
- **Accessibility Score:** 90+ (Lighthouse)
- **Best Practices Score:** 90+ (Lighthouse)

### Performance Optimizations Applied

1. **Server-Side Rendering** - HTML is generated on the server
2. **Minimal JavaScript** - Client-side JS is minimal
3. **System Fonts** - No web font downloads
4. **Optimized Images** - Using Next.js image optimization
5. **Code Splitting** - Automatic by Next.js
6. **Static Generation** - Can be enabled with `generateStaticParams`
7. **No External Resources** - All assets are local or optimized

## 🔍 SEO Features

### Meta Tags
- Title tag with template
- Description meta tag
- Open Graph tags (og:title, og:description, og:image, og:type)
- Twitter Card tags
- Robots meta tag

### Structured Data
- JSON-LD Course schema
- Microdata attributes in HTML
- Organization schema for provider
- Person schema for instructor
- Offer schema for pricing

### Semantic HTML
- Proper heading hierarchy
- Article structure
- Section landmarks
- Descriptive link text
- Alt attributes on images

## 🧪 Testing

To verify SEO and performance:

1. **Google Rich Results Test**: https://search.google.com/test/rich-results
   - Copy the page HTML and test for Course schema

2. **Lighthouse (Chrome DevTools)**:
   - Open DevTools → Lighthouse tab
   - Run audit for Performance, SEO, Accessibility

3. **Meta Tags Checker**: https://metatags.io/
   - Enter your page URL to preview social media cards

4. **Page Speed Insights**: https://pagespeed.web.dev/
   - Test Core Web Vitals scores

## 📝 Code Quality

- **TypeScript** for type safety
- **Server Components** as default (better performance)
- **Client Components** only when needed (interactivity)
- **Async/Await** for data fetching
- **Error Handling** with not-found.tsx
- **Clean Architecture** with separation of concerns

## 🔄 Extending the Project

### Adding Real API Integration

Replace the mock data in `lib/courseData.ts`:

```typescript
export async function getCourseById(id: string): Promise<Course | null> {
  const response = await fetch(`https://api.example.com/courses/${id}`);
  if (!response.ok) return null;
  return response.json();
}
```

### Adding Static Site Generation (SSG)

The project already includes `generateStaticParams` for pre-rendering:

```typescript
export async function generateStaticParams() {
  const courseIds = await getAllCourseIds();
  return courseIds.map((id) => ({ id }));
}
```

### Adding Revalidation (ISR)

Add to the page component:

```typescript
export const revalidate = 3600; // Revalidate every hour
```

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Next.js Metadata API](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)
- [Schema.org Course](https://schema.org/Course)
- [Google Search Central - Structured Data](https://developers.google.com/search/docs/appearance/structured-data)
- [Core Web Vitals](https://web.dev/vitals/)

## ✅ Assessment Requirements Checklist

- ✅ Dynamic metadata generation (title, meta description, OG tags)
- ✅ JSON-LD Schema markup for Course object
- ✅ Server-Side Rendering (SSR) with Next.js App Router
- ✅ Performance optimized for 90+ Lighthouse score
- ✅ SEO optimized with semantic HTML
- ✅ Clean code structure and separation of concerns
- ✅ TypeScript for type safety
- ✅ Tailwind CSS for styling
- ✅ Mock data fetching with async/await
- ✅ Proper error handling (404 pages)

## 📄 License

This project is created for assessment purposes.
