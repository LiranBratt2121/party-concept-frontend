import styled from "@emotion/styled";

export const CardWrapper = styled.div`
  border: 1px solid #eee;
  border-radius: 8px;
  overflow: hidden;
  text-align: center;
  transition: box-shadow 0.3s ease, transform 0.3s ease;
  background: white;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0,0,0,0.1);
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  cursor: pointer;
  width: 100%;
  aspect-ratio: 1 / 1; /* Makes the image container a square */
`;

export const InfoWrapper = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const ProductName = styled.h3`
  font-size: 1rem;
  font-weight: 500;
  color: #333;
  margin: 0;
`;

export const ProductPrice = styled.p`
  font-size: 1.1rem;
  font-weight: 600;
  color: #80005e;
  margin: 0;

  &::before {
    content: "₪";
    margin-right: 0.2rem;
  }
`;

export const AddToCartButton = styled.button`
  padding: 0.7rem 1rem;
  border: none;
  background-color: #c83771;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 600;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #80005e;
  }
`;