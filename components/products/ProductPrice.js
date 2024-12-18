export default function ProductPrice({ price, discountPercentage }) {
  const originalPrice = Math.round(price / (1 - discountPercentage / 100));
  
  return (
    <div className="mt-2 flex items-baseline gap-2">
      <span className="text-xl font-bold">${price}</span>
      <span className="text-sm text-muted-foreground line-through">
        ${originalPrice}
      </span>
    </div>
  );
}