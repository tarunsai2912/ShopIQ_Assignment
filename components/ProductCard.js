import Image from 'next/image';
import { Star } from 'lucide-react';

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
        <div className="flex items-center mt-1">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(product.rating)
                    ? 'text-yellow-400 fill-current'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="ml-2 text-sm text-muted-foreground">
            ({product.rating})
          </span>
        </div>
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-xl font-bold">${product.price}</span>
          <span className="text-sm text-muted-foreground line-through">
            ${Math.round(product.price / (1 - product.discountPercentage / 100))}
          </span>
        </div>
      </div>
    </div>
  );
}