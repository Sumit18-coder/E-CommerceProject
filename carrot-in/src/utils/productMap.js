import { menProducts } from "@/data/menProducts";
import { womenProducts } from "@/data/womenProducts";
import {mobileProducts} from "@/data/mobileProducts";
import {computerProducts} from "./computerProducts";
import electronicsProducts from "./electronicsProducts";
import {booksProducts} from "./booksProducts";
import {homeProducts} from "./homeProducts";
import {kitchenProducts} from "./kitchenProducts";
import {toysProducts} from "./toysProducts";
import {sportsProducts} from "./sportsProducts";

export const PRODUCT_MAP = {
  men: menProducts,
  women: womenProducts,
  mobile: mobileProducts,
  electronics: electronicsProducts,
  computers: computerProducts,
  books: booksProducts,
  home: homeProducts,
  kitchen: kitchenProducts,
  toys: toysProducts,
  sports: sportsProducts,
};
