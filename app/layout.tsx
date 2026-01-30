import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://example.com'),
  title: {
    default: 'Course Platform | Learn New Skills Online',
    template: '%s | Course Platform',
  },
  description: 'Discover and enroll in high-quality online courses from top instructors',
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-white text-gray-900">
        <header className="bg-blue-600 text-white py-4 mb-8">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-2xl font-bold">Course Platform</h1>
          </div>
        </header>
        {children}
        <footer className="mt-16 bg-gray-100 py-8">
          <div className="max-w-4xl mx-auto px-4 text-center text-gray-600">
            <p>&copy; 2024 Course Platform. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
