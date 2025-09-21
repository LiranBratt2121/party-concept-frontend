"use client";

import React from "react";
import { Section, SectionTitle } from "../Shared/Section.styles";
import ProductCard from "./ProductCard/ProductCard";
import { featuredProducts } from "@/lib/data";
import Carousel from "../Carousel/Carousel";

const FeaturedProducts = () => {
  return (
    <Section>
      <SectionTitle>מוצרים מובילים</SectionTitle>
      <Carousel grouped>
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Carousel>
    </Section>
  );
};

export default FeaturedProducts;
