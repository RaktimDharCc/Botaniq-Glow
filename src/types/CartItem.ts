import type { Product } from "./Product";

export type CartItem = Product & {
  quantity: number;
};
