import styled from "@emotion/styled";

export const ProductWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 10px;
    border-radius: 8px;
    transition: transform 0.2s ease;
    
    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    }
`;

export const ProductImage = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 8px;
    overflow: hidden;
    
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
`;

export const ProductName = styled.div`
    font-size: 12px;
    color: #333;
    font-weight: 500;
    line-height: 1.3;
    direction: rtl;
    text-align: center;
`;

export const ProductPrice = styled.div`
    font-size: 14px;
    color: #666;
    font-weight: 600;
    
    &::after {
        content: " ₪";
    }
`;