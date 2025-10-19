"use client";

import { trpc } from "../../lib/trpc";
import { useState } from "react";

export default function CategoriesPage() {
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [description, setDescription] = useState("");

  const { data: categories, isLoading } = trpc.categories.getAll.useQuery();
  const utils = trpc.useUtils();

  const createCategory = trpc.categories.create.useMutation({
    onSuccess: () => {
      utils.categories.getAll.invalidate();
      setName("");
      setSlug("");
      setDescription("");
    },
  });

  const deleteCategory = trpc.categories.delete.useMutation({
    onSuccess: () => {
      utils.categories.getAll.invalidate();
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createCategory.mutate({ name, slug, description });
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Categories</h1>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Create Category Form */}
        <div className="border p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Create Category</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border rounded px-3 py-2"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Slug</label>
              <input
                type="text"
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                className="w-full border rounded px-3 py-2"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Description (Optional)
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full border rounded px-3 py-2"
                rows={3}
              />
            </div>

            <button
              type="submit"
              disabled={createCategory.isPending}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
            >
              {createCategory.isPending ? "Creating..." : "Create Category"}
            </button>
          </form>
        </div>

        {/* Categories List */}
        <div>
          <h2 className="text-2xl font-bold mb-4">All Categories</h2>
          {isLoading ? (
            <p>Loading categories...</p>
          ) : categories?.length === 0 ? (
            <p>No categories yet. Create one!</p>
          ) : (
            <div className="space-y-3">
              {categories?.map((category) => (
                <div
                  key={category.id}
                  className="border p-4 rounded-lg flex justify-between items-start"
                >
                  <div>
                    <h3 className="font-semibold text-lg">{category.name}</h3>
                    <p className="text-sm text-gray-600">{category.slug}</p>
                    {category.description && (
                      <p className="text-sm mt-1">{category.description}</p>
                    )}
                  </div>
                  <button
                    onClick={() => {
                      if (confirm("Delete this category?")) {
                        deleteCategory.mutate({ id: category.id });
                      }
                    }}
                    className="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
