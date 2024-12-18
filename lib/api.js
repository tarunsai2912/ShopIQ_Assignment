// Fetch all products with a default limit
export async function fetchProducts(limit = 100) {
  try {
    const response = await fetch(`https://dummyjson.com/products?limit=${limit}`);
    if (!response.ok) throw new Error('Failed to fetch products');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
}

// Fetch a single product by its ID
export async function getProduct(id) {
  try {
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    if (!response.ok) throw new Error('Failed to fetch product');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching product:', error);
    throw error;
  }
}

export async function fetchCategories() {
  try {
    const response = await fetch('https://dummyjson.com/products/categories');
    if (!response.ok) throw new Error('Failed to fetch categories');
    return response.json();
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
}

export async function fetchProductsByCategory(category) {
  try {
    const response = await fetch(`https://dummyjson.com/products/category/${category}`);
    if (!response.ok) throw new Error('Failed to fetch products by category');
    return response.json();
  } catch (error) {
    console.error('Error fetching products by category:', error);
    throw error;
  }
}
