import styled from '@emotion/styled';


export const FooterWrapper = styled.footer`
  background-color: #c7008b;
  color: #f3e5f5;
  padding: 1rem 2.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap; 
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    gap: 1.5rem;
    padding: 1.5rem 1rem;
  }
`;

export  const PaymentIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 2.25rem; 
  color: rgba(255, 255, 255, 0.6); 
`;

export const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end; 
  gap: 0.5rem;

  @media (max-width: 768px) {
    align-items: center; // Center content on mobile
    text-align: center;
  }
`;

export const LinksContainer = styled.nav`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap; 
  justify-content: flex-end;

  @media (max-width: 768px) {
    justify-content: center; // Center links on mobile
  }
`;

export const StyledLink = styled.a`
  color: inherit;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #ffffff; 
    text-decoration: underline;
  }
`;

export const CopyrightText = styled.p`
  margin: 0;
  font-size: 0.85rem;
  opacity: 0.8;
`;