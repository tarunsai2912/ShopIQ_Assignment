import Layout from '@/components/layout/Layout';
import ProductGallery from '@/components/products/ProductGallery';
import ProductDetails from '@/components/products/ProductDetails';
import { getProduct, fetchProducts } from '@/lib/api';

// The main ProductPage component
export default async function ProductPage({ params }) {
  const product = await getProduct(params.id);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8">
          <ProductGallery images={product.images} thumbnail={product.thumbnail} title={product.title} />
          <ProductDetails product={product} />
        </div>
      </div>
    </Layout>
  );
}

// Generate static params for dynamic routes (e.g., product/1, product/2, etc.)
export async function generateStaticParams() {
  const data = await fetchProducts(100); // Fetch up to 100 products
  const products = data.products || [];

  // Return the params for each product
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}
