import ProductPrice from './ProductPrice';
import ProductRating from './ProductRating';

export default function ProductDetails({ product }) {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">{product.title}</h1>
        <p className="text-muted-foreground mt-2">{product.brand}</p>
      </div>

      <div className="flex items-baseline gap-4">
        <ProductPrice price={product.price} discountPercentage={product.discountPercentage} />
        <span className="text-green-600 font-semibold">
          {product.discountPercentage}% OFF
        </span>
      </div>

      <ProductRating rating={product.rating} />

      <div>
        <h3 className="font-semibold mb-2">Description</h3>
        <p className="text-muted-foreground">{product.description}</p>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="font-semibold">Category:</span>
          <span className="text-muted-foreground capitalize">{product.category}</span>
        </div>
        
        <div className="flex items-center gap-2">
          <span className="font-semibold">Stock:</span>
          <span className={product.stock > 0 ? 'text-green-600' : 'text-red-600'}>
            {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
          </span>
        </div>
      </div>

      <button className="w-full md:w-auto bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:opacity-90 transition-opacity">
        Add to Cart
      </button>
    </div>
  );
}