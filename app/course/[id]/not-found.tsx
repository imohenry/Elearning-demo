export default function NotFound() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-16 text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Course Not Found</h1>
      <p className="text-xl text-gray-600 mb-8">
        The course you're looking for doesn't exist or has been removed.
      </p>
      <a
        href="/"
        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
      >
        Back to Home
      </a>
    </main>
  );
}
