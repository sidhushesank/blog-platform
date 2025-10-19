"use client";

import { trpc } from "../../../lib/trpc";
import Link from "next/link";
import { use } from "react";

export default function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const { data: posts } = trpc.posts.getAll.useQuery();
  const post = posts?.find((p) => p.slug === slug);

  if (!post) {
    return (
      <main className="container mx-auto px-4 py-8 max-w-3xl">
        <p>Post not found</p>
        <Link href="/dashboard" className="text-blue-600 hover:underline">
          ← Back to dashboard
        </Link>
      </main>
    );
  }

  return (
    <main className="container mx-auto px-4 py-8 max-w-3xl">
      <Link href="/dashboard" className="text-blue-600 hover:underline mb-4 inline-block">
        ← Back to dashboard
      </Link>

      <article>
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <div className="text-gray-600 mb-8">
          <span className={`px-2 py-1 rounded text-sm ${post.published ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
            {post.published ? "Published" : "Draft"}
          </span>
        </div>
        <div className="text-lg leading-relaxed whitespace-pre-wrap">
          {post.content}
        </div>
      </article>
    </main>
  );
}
