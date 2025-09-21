"use client";

import React from 'react';
import Image from 'next/image';
import { brands } from '@/lib/data';
import { Section, SectionTitle } from '../Shared/Section.styles';
import * as S from './BrandShowcase.styles';

const BrandShowcase = () => {
  return (
    <Section>
      <SectionTitle>המותגים המובילים</SectionTitle>
      <S.BrandsContainer>
        {brands.map(brand => (
          <S.BrandLogo key={brand.name}>
            <Image src={brand.logoUrl} alt={`${brand.name} logo`} layout="fill" objectFit="contain" />
          </S.BrandLogo>
        ))}
      </S.BrandsContainer>
    </Section>
  );
};

export default BrandShowcase;