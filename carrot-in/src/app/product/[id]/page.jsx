import ProductClient from "./ProductClient";

export default async function ProductPage({ params }) {
  const { id } = await params;   

  return <ProductClient productId={id} />;  
}
