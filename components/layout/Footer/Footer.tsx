"use client";

import React from 'react'
import { FooterContainer, Header, Section } from './Footer.styles';
import ContactUs from './ContatctUs/ContactUs';
import FollowUs from './FollowUs/FollowUs';
import ProductDisplay from './Products/ProductDisplay';
import CatagoriesSelector from './CatagoriesSelector/CatagoriesSelector';
import { Bottom } from './Bottom/Bottom';

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
            products={[
              {
                id: "1",
                name: "בלון הליום לבן",
                description: "בלון הליום צבע לבן",
                priceShekel: 5,
                category: { name: "בלונים" },
                imageUrl: "https://partyconcept.co.il/wp-content/uploads/2025/09/BRN_5000052_01.jpg"
              },
              {
                id: "2",
                name: "בלון הליום אדום",
                description: "בלון הליום צבע אדום",
                priceShekel: 5,
                category: { name: "בלונים" },
                imageUrl: "https://partyconcept.co.il/wp-content/uploads/2025/09/BRN_5000052_01.jpg"
              },
              {
                id: "3",
                name: "בלון הליום כחול",
                description: "בלון הליום צבע כחול",
                priceShekel: 5,
                category: { name: "בלונים" },
                imageUrl: "https://partyconcept.co.il/wp-content/uploads/2025/09/BRN_5000052_01.jpg"
              }
            ]}
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
