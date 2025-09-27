import { featuredProducts } from '@/lib/data';
import { Product } from '@/types/product';


export const findProductById = (id: string): Product | undefined => {
  return featuredProducts.find(product => product.id === id);
};

export const findProductByName = (id: string): Product | undefined => {
  return featuredProducts.find(product => product.name === id);
};

/**
 * Get related products based on category
 */
export const getRelatedProducts = (product: Product, limit: number = 4): Product[] => {
  const relatedByCategory = featuredProducts.filter(
    p => p.id !== product.id && p.category.name === product.category.name
  );

  // If we have products in the same category, return those
  if (relatedByCategory.length >= limit) {
    return relatedByCategory.slice(0, limit);
  }

  // Otherwise, fill with other products
  const otherProducts = featuredProducts.filter(p => p.id !== product.id);
  return [...relatedByCategory, ...otherProducts].slice(0, limit);
};

/**
 * Format price in Israeli Shekel
 */
export const formatPrice = (price: number): string => {
  return `₪${price.toFixed(2)}`;
};

/**
 * Generate product URL slug from name
 */
export const generateProductSlug = (name: string): string => {
  return name
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove special characters except spaces and hyphens
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .trim();
};