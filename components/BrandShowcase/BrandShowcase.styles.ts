import styled from "@emotion/styled";

export const BrandsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 4rem;
`;

export const BrandLogo = styled.div`
  position: relative;
  width: 150px;
  height: 75px;
  filter: grayscale(100%);
  opacity: 0.7;
  transition: filter 0.3s ease, opacity 0.3s ease;

  &:hover {
    filter: grayscale(0%);
    opacity: 1;
  }
`;