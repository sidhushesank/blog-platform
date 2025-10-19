import { db } from "../db";

export const createContext = () => {
  return {
    db,
  };
};

export type Context = ReturnType<typeof createContext>;
