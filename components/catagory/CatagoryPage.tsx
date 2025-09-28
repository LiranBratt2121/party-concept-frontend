"use client";

import React, { useState, useMemo, useCallback, useRef, useEffect } from 'react';
import { Product } from '@/types/product';
import { Catagory } from '@/types/catagory';
import * as S from './CatagoryPage.styles';
import Breadcrumb from '../common/BreadCrumps';
import { useRouter } from 'next/navigation';

interface CategoryPageProps {
  category: Catagory;
  products: Product[];
}

// Sorting options
const sortOptions = [
  { value: 'default', label: 'ברירת מחדל' },
  { value: 'price-low', label: 'מחיר: נמוך לגבוה' },
  { value: 'price-high', label: 'מחיר: גבוה לנמוך' },
  { value: 'name-asc', label: 'שם: א-ת' },
  { value: 'name-desc', label: 'שם: ת-א' },
];

// Items per page for infinite scroll
const ITEMS_PER_PAGE = 12;

const CategoryPage: React.FC<CategoryPageProps> = ({ category, products }) => {
  const router = useRouter();
  const loadMoreRef = useRef<HTMLDivElement>(null);
  
  // State management
  const [maxPrice, setMaxPrice] = useState(200);
  const [minPrice, setMinPrice] = useState(0);
  const [sortBy, setSortBy] = useState('default');
  const [searchTerm, setSearchTerm] = useState('');
  const [displayedItemsCount, setDisplayedItemsCount] = useState(ITEMS_PER_PAGE);
  const [isLoading, setIsLoading] = useState(false);

  // Calculate price range from products
  const priceRange = useMemo(() => {
    const prices = products.map(p => p.priceShekel);
    return {
      min: Math.min(...prices),
      max: Math.max(...prices)
    };
  }, [products]);

  // Update price filters when products change
  useEffect(() => {
    setMinPrice(priceRange.min);
    setMaxPrice(priceRange.max);
  }, [priceRange]);

  // Filter and sort products
  const processedProducts = useMemo(() => {
    let filtered = products.filter(p => {
      const matchesPrice = p.priceShekel >= minPrice && p.priceShekel <= maxPrice;
      const matchesSearch = searchTerm === '' || 
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      return matchesPrice && matchesSearch;
    });

    // Sort products
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.priceShekel - b.priceShekel);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.priceShekel - a.priceShekel);
        break;
      case 'name-asc':
        filtered.sort((a, b) => a.name.localeCompare(b.name, 'he'));
        break;
      case 'name-desc':
        filtered.sort((a, b) => b.name.localeCompare(a.name, 'he'));
        break;
      default:
        // Keep original order
        break;
    }

    return filtered;
  }, [products, minPrice, maxPrice, searchTerm, sortBy]);

  // Products to display (for infinite scroll)
  const displayedProducts = useMemo(() => {
    return processedProducts.slice(0, displayedItemsCount);
  }, [processedProducts, displayedItemsCount]);

  // Load more products
  const loadMore = useCallback(() => {
    if (displayedItemsCount < processedProducts.length && !isLoading) {
      setIsLoading(true);
      // Simulate loading delay
      setTimeout(() => {
        setDisplayedItemsCount(prev => prev + ITEMS_PER_PAGE);
        setIsLoading(false);
      }, 500);
    }
  }, [displayedItemsCount, processedProducts.length, isLoading]);

  // Intersection Observer for infinite scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMore();
        }
      },
      { threshold: 0.1 }
    );

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }

    return () => observer.disconnect();
  }, [loadMore]);

  // Reset displayed items when filters change
  useEffect(() => {
    setDisplayedItemsCount(ITEMS_PER_PAGE);
  }, [minPrice, maxPrice, searchTerm, sortBy]);

  // Add to cart functionality
  const handleAddToCart = useCallback((product: Product) => {
    alert(`הוסף לעגלה: ${product.name} (₪${product.priceShekel})`);
  }, []);

  // Navigate to product page
  const navigateToProduct = useCallback((productId: string) => {
    router.push(`/product/${productId}`);
  }, [router]);

  return (
    <S.Container>
      <Breadcrumb
        items={[
          { label: 'עמוד הבית', href: '/' },
          { label: category.name }
        ]}
      />
      
      <S.PageHeader>
        <h1>{category.name}</h1>
        <S.ResultsCount>
          {processedProducts.length} מוצרים נמצאו
        </S.ResultsCount>
      </S.PageHeader>

      <S.MainLayout>
        {/* Enhanced Sidebar */}
        <S.Sidebar>
          {/* Search Filter */}
          <S.FilterGroup>
            <h3>חיפוש</h3>
            <S.SearchInput
              type="text"
              placeholder="חפש מוצרים..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </S.FilterGroup>

          {/* Price Filter */}
          <S.FilterGroup>
            <h3>סינון לפי מחיר</h3>
            <S.PriceFilter>
              <S.PriceInputs>
                <div>
                  <label>מחיר מינימלי: ₪{minPrice}</label>
                  <input 
                    type="range" 
                    min={priceRange.min} 
                    max={priceRange.max} 
                    value={minPrice} 
                    onChange={(e) => setMinPrice(Number(e.target.value))} 
                  />
                </div>
                <div>
                  <label>מחיר מקסימלי: ₪{maxPrice}</label>
                  <input 
                    type="range" 
                    min={priceRange.min} 
                    max={priceRange.max} 
                    value={maxPrice} 
                    onChange={(e) => setMaxPrice(Number(e.target.value))} 
                  />
                </div>
              </S.PriceInputs>
              <S.PriceRange>
                טווח: ₪{minPrice} - ₪{maxPrice}
              </S.PriceRange>
            </S.PriceFilter>
          </S.FilterGroup>

          {/* Clear Filters */}
          <S.ClearFilters
            onClick={() => {
              setMinPrice(priceRange.min);
              setMaxPrice(priceRange.max);
              setSearchTerm('');
              setSortBy('default');
            }}
          >
            נקה את כל המסננים
          </S.ClearFilters>
        </S.Sidebar>

        {/* Main Content */}
        <S.MainContent>
          {/* Sort Controls */}
          <S.SortControls>
            <S.SortSelect
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              {sortOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </S.SortSelect>
            <S.ViewToggle>
              <span>מציג {displayedProducts.length} מתוך {processedProducts.length}</span>
            </S.ViewToggle>
          </S.SortControls>

          {/* Product Grid */}
          <S.ProductGridContainer>
            {displayedProducts.length > 0 ? (
              displayedProducts.map((product) => (
                <S.EnhancedProductCard key={product.id}>
                  <S.ProductImageContainer
                    onClick={() => navigateToProduct(product.id)}
                  >
                    <img src={product.headImageUrl} alt={product.name} />
                    <S.QuickViewOverlay className="overlay">
                      <span>לחץ לצפייה</span>
                    </S.QuickViewOverlay>
                  </S.ProductImageContainer>
                  
                  <S.ProductInfo>
                    <h3 onClick={() => navigateToProduct(product.id)}>
                      {product.name}
                    </h3>
                    <p>{product.description}</p>
                    
                    <S.ProductFooter>
                      <S.Price>₪{product.priceShekel}</S.Price>
                      
                      <S.CartControls>
                        <S.AddToCartButton
                          onClick={() => handleAddToCart(product)}
                        >
                          הוסף לעגלה
                        </S.AddToCartButton>
                      </S.CartControls>
                    </S.ProductFooter>
                  </S.ProductInfo>
                </S.EnhancedProductCard>
              ))
            ) : (
              <S.NoResults>
                <h3>לא נמצאו מוצרים</h3>
                <p>אין מוצרים התואמים את הסינון שלך</p>
              </S.NoResults>
            )}
          </S.ProductGridContainer>

          {/* Infinite Scroll Trigger & Loading */}
          {displayedItemsCount < processedProducts.length && (
            <S.LoadMoreTrigger ref={loadMoreRef}>
              {isLoading ? (
                <S.LoadingSpinner>
                  <div></div>
                  <span>טוען מוצרים נוספים...</span>
                </S.LoadingSpinner>
              ) : (
                <S.LoadMoreButton onClick={loadMore}>
                  טען עוד מוצרים
                </S.LoadMoreButton>
              )}
            </S.LoadMoreTrigger>
          )}

          {displayedItemsCount >= processedProducts.length && processedProducts.length > 0 && (
            <S.EndOfResults>
              זה הכל! הצגת כל המוצרים בקטגוריה
            </S.EndOfResults>
          )}
        </S.MainContent>
      </S.MainLayout>
    </S.Container>
  );
};

export default CategoryPage;