import styled from '@emotion/styled';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  direction: rtl;
  font-family: 'Arial', sans-serif;
`;

export const PageHeader = styled.div`
  text-align: center;
  margin-bottom: 30px;
  
  h1 {
    font-size: 36px;
    color: #333;
    font-weight: bold;
    margin-bottom: 8px;
  }
`;

export const ResultsCount = styled.p`
  color: #666;
  font-size: 16px;
  margin: 0;
`;

export const MainLayout = styled.div`
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 30px;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

export const Sidebar = styled.aside`
  background: white;
  padding: 24px;
  border-radius: 16px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.08);
  align-self: start;
  position: sticky;
  top: 20px;

  @media (max-width: 992px) {
    position: static;
  }
`;

export const FilterGroup = styled.div`
  margin-bottom: 24px;
  
  h3 {
    font-size: 18px;
    font-weight: 600;
    margin: 0 0 16px 0;
    padding-bottom: 8px;
    border-bottom: 2px solid #f0f0f0;
    color: #333;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 12px;
  border: 2px solid #e1e1e1;
  border-radius: 8px;
  font-size: 14px;
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #e91e63;
  }
  
  &::placeholder {
    color: #999;
  }
`;

export const PriceFilter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const PriceInputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  
  div {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  
  label {
    font-size: 14px;
    color: #666;
    font-weight: 500;
  }

  input[type="range"] {
    width: 100%;
    height: 6px;
    border-radius: 3px;
    background: #ddd;
    outline: none;
    
    &::-webkit-slider-thumb {
      appearance: none;
      width: 18px;
      height: 18px;
      border-radius: 50%;
      background: #e91e63;
      cursor: pointer;
    }
    
    &::-moz-range-thumb {
      width: 18px;
      height: 18px;
      border-radius: 50%;
      background: #e91e63;
      cursor: pointer;
      border: none;
    }
  }
`;

export const PriceRange = styled.div`
  background: #f8f9fa;
  padding: 8px 12px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  color: #495057;
  text-align: center;
`;

export const ClearFilters = styled.button`
  width: 100%;
  padding: 12px;
  background: #f8f9fa;
  border: 2px solid #e9ecef;
  border-radius: 8px;
  color: #495057;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: #e9ecef;
    color: #343a40;
  }
`;

export const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const SortControls = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 12px;
    align-items: stretch;
  }
`;

export const SortSelect = styled.select`
  padding: 8px 12px;
  border: 2px solid #e1e1e1;
  border-radius: 6px;
  font-size: 14px;
  color: #333;
  cursor: pointer;
  
  &:focus {
    outline: none;
    border-color: #e91e63;
  }
`;

export const ViewToggle = styled.div`
  color: #666;
  font-size: 14px;
  
  span {
    font-weight: 500;
  }
`;

export const ProductGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 24px;
  min-height: 300px;
`;

export const EnhancedProductCard = styled.div`
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0,0,0,0.08);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(0,0,0,0.15);
  }
`;

export const ProductImageContainer = styled.div`
  position: relative;
  height: 200px;
  overflow: hidden;
  cursor: pointer;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
  
  &:hover img {
    transform: scale(1.05);
  }
  
  &:hover .overlay {
    opacity: 1;
  }
`;

export const QuickViewOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  
  span {
    color: white;
    font-weight: 600;
    font-size: 16px;
  }
`;

export const ProductInfo = styled.div`
  padding: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
  
  h3 {
    font-size: 18px;
    font-weight: 600;
    color: #333;
    cursor: pointer;
    transition: color 0.3s ease;
    margin: 0;
    
    &:hover {
      color: #e91e63;
    }
  }
  
  p {
    color: #666;
    font-size: 14px;
    line-height: 1.5;
    margin: 0;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;

export const ProductFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
  padding-top: 12px;
  border-top: 1px solid #f0f0f0;
`;

export const Price = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: #e91e63;
`;

export const CartControls = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;
`;

export const CartQuantity = styled.span`
  font-size: 12px;
  color: #28a745;
  font-weight: 600;
`;

export const AddToCartButton = styled.button`
  background: #e91e63;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: #c2185b;
    transform: translateY(-1px);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

export const NoResults = styled.div`
  grid-column: 1 / -1;
  text-align: center;
  padding: 60px 20px;
  color: #666;
  
  h3 {
    font-size: 24px;
    margin-bottom: 8px;
    color: #333;
  }
  
  p {
    font-size: 16px;
    margin: 0;
  }
`;

export const LoadMoreTrigger = styled.div`
  display: flex;
  justify-content: center;
  padding: 40px 20px;
`;

export const LoadingSpinner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  
  div {
    width: 32px;
    height: 32px;
    border: 3px solid #f3f3f3;
    border-top: 3px solid #e91e63;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }
  
  span {
    color: #666;
    font-size: 14px;
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

export const LoadMoreButton = styled.button`
  background: white;
  color: #e91e63;
  border: 2px solid #e91e63;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: #e91e63;
    color: white;
  }
`;

export const EndOfResults = styled.div`
  text-align: center;
  padding: 40px 20px;
  color: #666;
  font-size: 16px;
  font-weight: 500;
  border-top: 1px solid #e9ecef;
`;

// Legacy exports for backwards compatibility
export const ProductCard = EnhancedProductCard;
export const ProductGrid4 = ProductGridContainer;