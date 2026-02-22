import { PRODUCTS_BY_CATEGORY } from "./productsByCategory";
import { validateProducts } from "@/utils/validateProducts";

const allProducts = Object.values(PRODUCTS_BY_CATEGORY)
  .filter(Array.isArray)  // 🔥 ignore broken ones
  .flat();

validateProducts(allProducts);

export default allProducts;
