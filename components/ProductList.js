import Link from 'next/link';
import ProductCard from './ProductCard';

export default function ProductList({ products }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
      {products.map((product) => (
        <Link key={product.id} href={`/product/${product.id}`}>
          <ProductCard product={product} />
        </Link>
      ))}
    </div>
  );
}