import { pgTable, serial, varchar, text, timestamp, boolean, primaryKey, integer } from "drizzle-orm/pg-core";

// BlogPost table
export const blogPosts = pgTable("blog_posts", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  content: text("content").notNull(),
  slug: varchar("slug", { length: 255 }).notNull().unique(),
  published: boolean("published").notNull().default(false),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull()
});

// Category table
export const categories = pgTable("categories", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 100 }).notNull(),
  description: varchar("description", { length: 255 }),
  slug: varchar("slug", { length: 100 }).notNull().unique()
});

// PostCategory (many-to-many join)
export const postCategories = pgTable(
  "post_categories",
  {
    postId: integer("post_id").notNull().references(() => blogPosts.id),
    categoryId: integer("category_id").notNull().references(() => categories.id),
  },
  (t) => ({
    pk: primaryKey({ columns: [t.postId, t.categoryId] }),
  })
);
