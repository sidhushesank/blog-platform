import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to BlogPlatform</h1>
          <p className="text-xl mb-8">
            Create, manage, and publish your blog posts with ease
          </p>
          <Link
            href="/dashboard"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 inline-block transition transform hover:scale-105"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 container mx-auto px-4 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 - Blue/Cyan Gradient */}
          <div className="text-center p-8 rounded-xl bg-gradient-to-br from-blue-100 to-cyan-100 border-2 border-blue-200 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-105 cursor-pointer hover:from-blue-200 hover:to-cyan-200">
            <div className="text-5xl mb-4 transition-transform duration-300 hover:scale-110">
              ✍️
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Easy Writing</h3>
            <p className="text-gray-700">
              Create and edit blog posts with a simple, intuitive interface
            </p>
          </div>

          {/* Card 2 - Purple/Pink Gradient */}
          <div className="text-center p-8 rounded-xl bg-gradient-to-br from-purple-100 to-pink-100 border-2 border-purple-200 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-105 cursor-pointer hover:from-purple-200 hover:to-pink-200">
            <div className="text-5xl mb-4 transition-transform duration-300 hover:scale-110">
              🏷️
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Categories</h3>
            <p className="text-gray-700">
              Organize your content with custom categories
            </p>
          </div>

          {/* Card 3 - Orange/Yellow Gradient */}
          <div className="text-center p-8 rounded-xl bg-gradient-to-br from-orange-100 to-yellow-100 border-2 border-orange-200 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-105 cursor-pointer hover:from-orange-200 hover:to-yellow-200">
            <div className="text-5xl mb-4 transition-transform duration-300 hover:scale-110">
              🚀
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Publish Fast</h3>
            <p className="text-gray-700">
              Go from draft to published in seconds
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 BlogPlatform. Built with Next.js, tRPC, and PostgreSQL.</p>
        </div>
      </footer>
    </main>
  );
}
