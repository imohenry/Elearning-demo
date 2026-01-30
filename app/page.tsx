import Link from 'next/link';

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        Available Courses
      </h1>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Link 
          href="/course/1"
          className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition-shadow"
        >
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Advanced React Patterns
          </h2>
          <p className="text-gray-600">
            Master advanced React patterns and best practices
          </p>
        </Link>

        <Link 
          href="/course/2"
          className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition-shadow"
        >
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Full-Stack Development
          </h2>
          <p className="text-gray-600">
            Build complete web applications with Node.js and MongoDB
          </p>
        </Link>

        <Link 
          href="/course/3"
          className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition-shadow"
        >
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Machine Learning Fundamentals
          </h2>
          <p className="text-gray-600">
            Learn ML algorithms and neural networks with Python
          </p>
        </Link>
      </div>
    </main>
  );
}
