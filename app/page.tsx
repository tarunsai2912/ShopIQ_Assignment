"use client";

import { useEffect, useState } from 'react';
import Layout from '@/components/layout/Layout';
import Hero from '@/components/home/Hero';
import ProductGrid from '@/components/products/ProductGrid';
import { fetchProducts } from '@/lib/api';
import { PRODUCTS_PER_PAGE } from '@/lib/constants';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data.products);
        setVisibleProducts(data.products.slice(0, PRODUCTS_PER_PAGE));
      } catch (error) {
        // Error is already logged in the API function
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  const loadMore = () => {
    const nextPage = page + 1;
    const startIndex = page * PRODUCTS_PER_PAGE;
    const endIndex = startIndex + PRODUCTS_PER_PAGE;
    setVisibleProducts([...visibleProducts, ...products.slice(startIndex, endIndex)]);
    setPage(nextPage);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <Layout>
      <Hero />
      <div className="container mx-auto px-4 py-8">
        <ProductGrid products={visibleProducts} />
        {visibleProducts.length < products.length && (
          <div className="flex justify-center mt-8">
            <button
              onClick={loadMore}
              className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
            >
              Show More
            </button>
          </div>
        )}
      </div>
    </Layout>
  );
}