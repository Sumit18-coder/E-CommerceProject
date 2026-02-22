import mensProducts from "./menProducts";
import womensProducts from "./womenProducts";
import mobileProducts from "./mobileProducts";
import computerProducts from "./computerProducts";
import electronicsProducts from "./electronicsProducts";
import booksProducts from "./booksProducts";
import homeProducts from "./homeProducts";
import kitchenProducts from "./kitchenProducts";
import toysProducts from "./toysProducts";
import sportsProducts from "./sportsProducts";

console.log("IS ARRAY:", Array.isArray(electronicsProducts));

export const PRODUCTS_BY_CATEGORY = {
  men: mensProducts,
  women: womensProducts,
  mobile: mobileProducts,
  electronics: electronicsProducts,
  computers: computerProducts,
  books: booksProducts,
  home: homeProducts,
  kitchen: kitchenProducts,
  toys: toysProducts,
  sports: sportsProducts,
};
