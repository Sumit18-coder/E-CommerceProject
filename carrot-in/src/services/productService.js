export const getProductsByCategory = async (slug) => {
  return fetch(`/api/products?category=${slug}`);
};
