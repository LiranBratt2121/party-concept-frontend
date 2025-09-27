import BrandShowcase from '@/components/BrandShowcase/BrandShowcase';
import CatagoriesSlider from '@/components/CatagoriesSlider/CatagoriesSlider';
import FeaturedCategories from '@/components/FeaturedCatagories/FeaturedCategories';
import FeaturedProducts from '@/components/FeaturedProducts/FeaturedProducts';
import HeroCarousel from '@/components/HeroCarousel/HeroCarousel';
import PromoSection from '@/components/PromoSection/PromoSection';
import React from 'react';

export default function Home() {
  return (
    <div>
      <HeroCarousel />
      <div style={{ padding: '0 10px' }}>
        <FeaturedProducts />
        <FeaturedCategories />
        <CatagoriesSlider />
      </div>
      <PromoSection />
      <BrandShowcase />
    </div>
  );
}
