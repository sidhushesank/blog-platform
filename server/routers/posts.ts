import { z } from "zod";
import { router, publicProcedure } from "../trpc";
import { blogPosts } from "../../db/schema";
import { eq } from "drizzle-orm";

export const postsRouter = router({
  getAll: publicProcedure.query(async ({ ctx }) => {
    return await ctx.db.select().from(blogPosts);
  }),

  getById: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(async ({ ctx, input }) => {
      const result = await ctx.db
        .select()
        .from(blogPosts)
        .where(eq(blogPosts.id, input.id));
      return result[0];
    }),

  create: publicProcedure
    .input(
      z.object({
        title: z.string(),
        content: z.string(),
        slug: z.string(),
        published: z.boolean().default(false),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const result = await ctx.db
        .insert(blogPosts)
        .values(input)
        .returning();
      return result[0];
    }),

  update: publicProcedure
    .input(
      z.object({
        id: z.number(),
        title: z.string().optional(),
        content: z.string().optional(),
        published: z.boolean().optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { id, ...data } = input;
      const result = await ctx.db
        .update(blogPosts)
        .set(data)
        .where(eq(blogPosts.id, id))
        .returning();
      return result[0];
    }),

  delete: publicProcedure
    .input(z.object({ id: z.number() }))
    .mutation(async ({ ctx, input }) => {
      await ctx.db.delete(blogPosts).where(eq(blogPosts.id, input.id));
      return { success: true };
    }),
});
