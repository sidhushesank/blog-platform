import { router } from "../trpc";
import { postsRouter } from "./posts";
import { categoriesRouter } from "./categories";

export const appRouter = router({
  posts: postsRouter,
  categories: categoriesRouter,
});

export type AppRouter = typeof appRouter;
