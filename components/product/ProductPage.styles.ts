import styled from '@emotion/styled';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  direction: rtl;
  font-family: 'Arial', sans-serif;
`;

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

export const ImageSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const MainImage = styled.div`
  position: relative;
  aspect-ratio: 1;
  background: white;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ThumbnailGrid = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
`;

export const Thumbnail = styled.button<{ active: boolean }>`
  width: 80px;
  height: 80px;
  border-radius: 12px;
  overflow: hidden;
  border: 3px solid ${props => props.active ? '#e91e63' : '#e0e0e0'};
  cursor: pointer;
  transition: all 0.3s ease;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  &:hover {
    border-color: #e91e63;
    transform: scale(1.05);
  }
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const ProductHeader = styled.div`
  h1 {
    font-size: 28px;
    font-weight: bold;
    color: #333;
    margin: 0 0 12px 0;
    line-height: 1.3;
  }
`;

export const ProductMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 14px;
  color: #666;
  
  span {
    display: flex;
    align-items: center;
    gap: 4px;
  }
`;

export const PriceSection = styled.div`
  background: linear-gradient(135deg, #4CAF50 0%, #2196F3 100%);
  padding: 24px;
  border-radius: 20px;
  color: white;
  text-align: center;
`;

export const Price = styled.div`
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 8px;
`;

export const PriceNote = styled.div`
  font-size: 14px;
  opacity: 0.9;
`;

export const DescriptionBox = styled.div`
  background: white;
  padding: 24px;
  border-radius: 16px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.08);
  
  h3 {
    font-size: 18px;
    font-weight: 600;
    margin: 0 0 12px 0;
    color: #333;
  }
  
  p {
    color: #666;
    line-height: 1.6;
    margin: 0;
  }
`;

export const ActionSection = styled.div`
  background: white;
  padding: 24px;
  border-radius: 16px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.08);
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const QuantitySelector = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  
  label {
    font-weight: 500;
    color: #333;
  }
`;

export const QuantityControls = styled.div`
  display: flex;
  border: 2px solid #e0e0e0;
  border-radius: 12px;
  overflow: hidden;
  
  button {
    padding: 12px 16px;
    background: white;
    border: none;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    transition: background-color 0.2s;
    
    &:hover {
      background: #f5f5f5;
    }
  }
  
  span {
    padding: 12px 20px;
    border-left: 1px solid #e0e0e0;
    border-right: 1px solid #e0e0e0;
    background: #f9f9f9;
    font-weight: 500;
    min-width: 60px;
    text-align: center;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 12px;
`;

export const AddToCartButton = styled.button`
  flex: 1;
  background: linear-gradient(135deg, #e91e63 0%, #9c27b0 100%);
  color: white;
  border: none;
  padding: 16px 24px;
  border-radius: 12px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(233, 30, 99, 0.3);
  }
`;

export const WishlistButton = styled.button<{ active: boolean }>`
  padding: 16px;
  background: ${props => props.active ? '#e91e63' : 'white'};
  color: ${props => props.active ? 'white' : '#e91e63'};
  border: 2px solid #e91e63;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: #e91e63;
    color: white;
    transform: scale(1.05);
  }
`;

export const ContactSection = styled.div`
  background: linear-gradient(135deg, #FF9800 0%, #FF5722 100%);
  padding: 20px;
  border-radius: 16px;
  text-align: center;
  color: white;
  
  h3 {
    margin: 0 0 12px 0;
    font-size: 18px;
  }
  
  p {
    margin: 0;
    font-size: 16px;
    font-weight: 500;
  }
`;

export const RelatedProducts = styled.div`
  margin-top: 60px;
  
  h2 {
    text-align: center;
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 40px;
    color: #333;
  }
`;

export const ProductCard = styled.div`
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0,0,0,0.08);
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0,0,0,0.15);
  }
  
  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  
  .content {
    padding: 16px;
    
    h3 {
      font-size: 16px;
      font-weight: 600;
      margin: 0 0 8px 0;
      color: #333;
      line-height: 1.3;
    }
    
    .price {
      font-size: 18px;
      font-weight: bold;
      color: #4CAF50;
    }
  }
`;

export const ProductGrid4 = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
`;