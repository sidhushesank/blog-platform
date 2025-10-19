"use client";

import { trpc } from "../lib/trpc";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function BlogList() {
  const [mounted, setMounted] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const { data: posts, isLoading } = trpc.posts.getAll.useQuery();
  const utils = trpc.useUtils();
  
  const deletePost = trpc.posts.delete.useMutation({
    onSuccess: () => {
      utils.posts.getAll.invalidate();
    },
  });

  const togglePublish = trpc.posts.update.useMutation({
    onSuccess: () => {
      utils.posts.getAll.invalidate();
    },
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  // Filter posts based on search
  const filteredPosts = posts?.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (!mounted || isLoading) return <div>Loading posts...</div>;

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Blog Posts</h2>
      
      {/* Search Bar */}
      <input
        type="text"
        placeholder="🔍 Search posts..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:border-blue-500 focus:outline-none"
      />

      {filteredPosts?.length === 0 ? (
        <p>{searchTerm ? "No posts found." : "No posts yet. Create your first post!"}</p>
      ) : (
        <div className="grid gap-4">
          {filteredPosts?.map((post) => (
            <div key={post.id} className="border p-4 rounded-lg hover:shadow-lg transition">
              <Link href={`/post/${post.slug}`}>
                <h3 className="text-xl font-semibold hover:text-blue-600 cursor-pointer">
                  {post.title}
                </h3>
              </Link>
              <p className="text-gray-600">{post.slug}</p>
              <p className="mt-2">{post.content.substring(0, 150)}...</p>
              
              <div className="flex gap-2 mt-3">
                <span
                  className={`inline-block px-2 py-1 text-sm rounded ${
                    post.published ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {post.published ? "Published" : "Draft"}
                </span>
                
                <Link
                  href={`/post/${post.slug}`}
                  className="px-3 py-1 text-sm bg-green-500 text-white rounded hover:bg-green-600"
                >
                  View
                </Link>
                
                <button
                  onClick={() => togglePublish.mutate({ id: post.id, published: !post.published })}
                  className="px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  {post.published ? "Unpublish" : "Publish"}
                </button>
                
                <button
                  onClick={() => {
                    if (confirm("Delete this post?")) {
                      deletePost.mutate({ id: post.id });
                    }
                  }}
                  className="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
