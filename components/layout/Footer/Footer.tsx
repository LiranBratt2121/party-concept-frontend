"use client";

import React from 'react'
import { FooterContainer, Header, Section } from './Footer.styles';
import ContactUs from './ContatctUs/ContactUs';
import FollowUs from './FollowUs/FollowUs';
import ProductDisplay from './Products/ProductDisplay';
import CatagoriesSelector from './CatagoriesSelector/CatagoriesSelector';
import { Bottom } from './Bottom/Bottom';
import { exampleProducts } from '@/lib/data';

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <Section>
          <Header>שומרים על קשר</Header>
          <ContactUs />
        </Section>

        <Section>
          <Header>עקבו אחרינו</Header>
          <FollowUs />
        </Section>

        <Section>
          <Header>מוצרים</Header>
          <ProductDisplay
            products={exampleProducts}
          />
        </Section>

        <Section>
          <Header>קטגוריות נבחרות</Header>
          <CatagoriesSelector />
        </Section>
      </FooterContainer>
      <Bottom
      />
    </>
  )
}

export default Footer;
