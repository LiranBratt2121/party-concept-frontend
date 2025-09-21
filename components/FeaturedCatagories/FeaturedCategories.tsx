"use client";

import React from 'react';
import { featuredCategories } from '@/lib/data';
import { Section, SectionTitle, Grid } from '../Shared/Section.styles';
import CategoryCard from './CatagoryCard/CategoryCard';

const FeaturedCategories = () => {

  return (
    <Section style={{ background: '#f9f9f9' }}>
      <SectionTitle>קטגוריות מובילות</SectionTitle>
      <Grid>
        {featuredCategories.map(category => (
          <CategoryCard key={category.name} name={category.name} imageUrl={category.imageUrl} />
        ))}
      </Grid>
    </Section>
  );
};

export default FeaturedCategories;