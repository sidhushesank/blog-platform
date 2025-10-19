"use client";

import BlogList from "../../components/BlogList";
import BlogForm from "../../components/BlogForm";
import { trpc } from "../../lib/trpc";

export default function DashboardPage() {
  // Fetch real data for stats
  const { data: posts } = trpc.posts.getAll.useQuery();
  const { data: categories } = trpc.categories.getAll.useQuery();

  // Calculate stats
  const totalPosts = posts?.length || 0;
  const totalCategories = categories?.length || 0;
  const publishedPosts = posts?.filter(post => post.published).length || 0;

  return (
    <main className="container mx-auto px-4 py-8 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold mb-8">Dashboard</h1>
      
      {/* Quick Stats - Now Dynamic */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="bg-blue-500 text-white p-6 rounded-lg text-center shadow-lg hover:shadow-xl transition transform hover:scale-105">
          <div className="text-4xl mb-2">📝</div>
          <p className="text-4xl font-bold">{totalPosts}</p>
          <p className="text-sm mt-1">Total Posts</p>
        </div>
        <div className="bg-green-500 text-white p-6 rounded-lg text-center shadow-lg hover:shadow-xl transition transform hover:scale-105">
          <div className="text-4xl mb-2">🏷️</div>
          <p className="text-4xl font-bold">{totalCategories}</p>
          <p className="text-sm mt-1">Categories</p>
        </div>
        <div className="bg-purple-500 text-white p-6 rounded-lg text-center shadow-lg hover:shadow-xl transition transform hover:scale-105">
          <div className="text-4xl mb-2">✅</div>
          <p className="text-4xl font-bold">{publishedPosts}</p>
          <p className="text-sm mt-1">Published</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <BlogForm />
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <BlogList />
        </div>
      </div>
    </main>
  );
}
