"use client";

import React from 'react';
import {
  FaCcAmex,
  FaCcMastercard,
  FaCcDiscover,
  FaPaypal,
  FaCcVisa,
} from 'react-icons/fa';
import { CopyrightText, FooterWrapper, LinksContainer, PaymentIcons, RightSection, StyledLink } from './Bottom.styles';

export const Bottom: React.FC = () => {
  return (
    <>
      <FooterWrapper>
        <PaymentIcons>
          <FaCcAmex />
          <FaCcMastercard />
          <FaCcDiscover />
          <FaPaypal />
          <FaCcVisa />
        </PaymentIcons>

        <RightSection>
          <LinksContainer>
            <StyledLink href="#">תקנון ותנאי שימוש</StyledLink>
            <StyledLink href="#">צור קשר</StyledLink>
            <StyledLink href="#">אודות</StyledLink>
            <StyledLink href="#">מדיניות שירות</StyledLink>
          </LinksContainer>
          <CopyrightText>
            כל הזכויות שמורות ללירן ברט © 2025
          </CopyrightText>
        </RightSection>
      </FooterWrapper>
    </>
  );
};