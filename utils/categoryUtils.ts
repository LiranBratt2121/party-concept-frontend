import { featuredCategories, featuredProducts } from "@/lib/data";
import { Catagory } from "@/types/catagory";
import { Product } from "@/types/product";

/**
 * Finds a category by its name.
 * It first checks the dedicated `featuredCategories` list, 
 * then falls back to checking categories within the `featuredProducts`.
 * @param name The name of the category to find (can be URL-encoded).
 * @returns The category object or undefined if not found.
 */
export const findCategoryByName = (name: string): Catagory | undefined => {
    const decodedName = decodeURIComponent(name);
    console.log(decodedName)
    
    // First, check the dedicated list of categories
    const featuredCategory = featuredCategories.find(cat => cat.name === decodedName);
    if (featuredCategory) {
        return featuredCategory;
    }
    
    // As a fallback, find the first product that matches the category name
    const productWithCategory = featuredProducts.find(p => p.category.name === decodedName);
    return productWithCategory?.category;
};

export const getProductsByCategory = (categoryName: string): Product[] => {
  const decodedCategoryName = decodeURIComponent(categoryName);
  return featuredProducts.filter(p => p.category.name === decodedCategoryName);
};

/**
 * Gets a unique list of all available categories.
 * It combines the dedicated `featuredCategories` with categories found in `featuredProducts`.
 * @returns An array of unique category objects.
 */
export const getAllCategories = (): Catagory[] => {
    const categoriesMap = new Map<string, Catagory>();
    
    // Add categories from the curated list first
    featuredCategories.forEach(cat => {
        categoriesMap.set(cat.name, cat);
    });

    // Add categories from the products list, avoiding duplicates
    featuredProducts.forEach(product => {
        if (!categoriesMap.has(product.category.name)) {
            categoriesMap.set(product.category.name, product.category);
        }
    });

    return Array.from(categoriesMap.values());
};