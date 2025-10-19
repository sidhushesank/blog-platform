"use client";

import { useState } from "react";
import { trpc } from "../lib/trpc";

export default function BlogForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [slug, setSlug] = useState("");

  const utils = trpc.useUtils();
  const createPost = trpc.posts.create.useMutation({
    onSuccess: () => {
      utils.posts.getAll.invalidate();
      setTitle("");
      setContent("");
      setSlug("");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createPost.mutate({
      title,
      content,
      slug,
      published: false,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-2xl font-bold">Create New Post</h2>
      
      <div>
        <label className="block text-sm font-medium mb-1">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border rounded px-3 py-2 focus:border-blue-500 focus:outline-none transition"
          placeholder="Enter post title..."
          required
        />
        <p className="text-xs text-gray-500 mt-1">{title.length} characters</p>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Slug</label>
        <input
          type="text"
          value={slug}
          onChange={(e) => setSlug(e.target.value)}
          className="w-full border rounded px-3 py-2 focus:border-blue-500 focus:outline-none transition"
          placeholder="post-url-slug"
          required
        />
        <p className="text-xs text-gray-500 mt-1">URL: /post/{slug || "your-slug"}</p>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Content</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full border rounded px-3 py-2 focus:border-blue-500 focus:outline-none transition"
          placeholder="Write your blog post content here..."
          rows={6}
          required
        />
        <div className="flex justify-between items-center mt-1">
          <p className="text-xs text-gray-500">{content.length} characters</p>
          <p className="text-xs text-gray-500">
            {Math.ceil(content.split(" ").filter(w => w).length)} words
          </p>
        </div>
      </div>

      <button
        type="submit"
        disabled={createPost.isPending}
        className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50 transition transform hover:scale-105 font-medium"
      >
        {createPost.isPending ? "Creating..." : "Create Post 📝"}
      </button>
    </form>
  );
}
