import { fetchProductsByCategory, fetchCategories } from '@/lib/api';
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

export async function getStaticPaths() { 
  const categories = await fetchCategories(); 
  const paths = categories.map((category) => ({ params: { category: category.toLowerCase().replace(/\s+/g, '-') }, })); 
  return { paths, fallback: false }; 
} 

export async function getStaticProps({ params }) { 
  const products = await fetchProductsByCategory(params.category); 
  return { props: { products: products.products, category: params.category, }, }; 
}

// export async function generateStaticParams() {
//   const categories = await fetchCategories(); // Fetch all categories
//   return categories.map((category) => ({
//     category: category.toLowerCase().replace(/\s+/g, '-'), // Generate slugs
//   }));
// }

// export async function generateStaticParams() {
//   const categories = await fetchCategories(); // Fetch categories from API
//   return categories.map((category) => ({ category }));
// }