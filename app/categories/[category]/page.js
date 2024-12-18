import { fetchProductsByCategory } from '@/lib/api';
import Layout from '@/components/layout/Layout';
import ProductGrid from '@/components/products/ProductGrid';

export default async function CategoryPage({ params }) {
  const { products } = await fetchProductsByCategory(params.category);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 capitalize">
          {params.category.replace('-', ' ')}
        </h1>
        <ProductGrid products={products} />
      </div>
    </Layout>
  );
}