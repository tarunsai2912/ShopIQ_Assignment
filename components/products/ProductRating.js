import { Star } from 'lucide-react';

export default function ProductRating({ rating }) {
  return (
    <div className="flex items-center mt-1">
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < Math.floor(rating)
                ? 'text-yellow-400 fill-current'
                : 'text-gray-300'
            }`}
          />
        ))}
      </div>
      <span className="ml-2 text-sm text-muted-foreground">({rating})</span>
    </div>
  );
}