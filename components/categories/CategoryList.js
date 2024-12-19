import Link from 'next/link';
import { Grid3X3, Smartphone, Watch, Diamond, Laptop, Shirt } from 'lucide-react';

const categoryIcons = {
  'smartphones': Smartphone,
  'laptops': Laptop,
  'fragrances': Grid3X3,
  'skincare': Diamond,
  'groceries': Grid3X3,
  'home-decoration': Grid3X3,
  'furniture': Grid3X3,
  'tops': Shirt,
  'womens-dresses': Shirt,
  'womens-shoes': Grid3X3,
  'mens-shirts': Shirt,
  'mens-shoes': Grid3X3,
  'mens-watches': Watch,
  'womens-watches': Watch,
  'womens-bags': Grid3X3,
  'womens-jewellery': Diamond,
  'sunglasses': Grid3X3,
  'automotive': Grid3X3,
  'motorcycle': Grid3X3,
  'lighting': Grid3X3,
};

export default function CategoryList({ categories }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {categories.map((category, index) => {
        const categoryName = typeof category === 'string' ? category : category?.name || `category-${index}`;
        const Icon = categoryIcons[categoryName] || Grid3X3;

        return (
          <div className="group bg-card hover:bg-accent rounded-lg p-6 text-center transition-colors">
            <Icon className="w-12 h-12 mx-auto mb-4 text-primary group-hover:text-primary/80 transition-colors" />
            <h3 className="text-lg font-semibold capitalize">
              {categoryName.replace('-', ' ')}
            </h3>
          </div>
        );
      })}
    </div>
  );
}
