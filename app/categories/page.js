import { fetchCategories } from '@/lib/api';
import Layout from '@/components/layout/Layout';
import CategoryList from '@/components/categories/CategoryList';

export default async function CategoriesPage() {
  const categories = await fetchCategories();

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Product Categories</h1>
        <CategoryList categories={categories} />
      </div>
    </Layout>
  );
}

export async function generateStaticParams() {
  const categories = await fetchCategories(); // Fetch all categories
  return categories.map((category) => ({
    category: category.toLowerCase().replace(/\s+/g, '-'), // Generate slugs
  }));
}