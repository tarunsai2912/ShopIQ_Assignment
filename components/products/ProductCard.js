import Image from 'next/image';
import ProductRating from './ProductRating';
import ProductPrice from './ProductPrice';

export default function ProductCard({ product }) {
  return (
    <div className="group bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="relative h-48 md:h-64">
        <Image
          src={product.thumbnail}
          alt={product.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-2 right-2 bg-primary text-primary-foreground px-2 py-1 rounded-full text-sm">
          {product.discountPercentage}% OFF
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-lg truncate">{product.title}</h3>
        <ProductRating rating={product.rating} />
        <ProductPrice price={product.price} discountPercentage={product.discountPercentage} />
      </div>
    </div>
  );
}