import styled from "@emotion/styled";

export const CategoriesSelectorWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const SearchInput = styled.input`
    padding: 12px 16px;
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    font-size: 14px;
    outline: none;
    direction: rtl;
    text-align: right;
    
    &:focus {
        border-color: #4a90e2;
        box-shadow: 0 0 0 3px rgba(74, 144, 226, 0.1);
    }
    
    &::placeholder {
        color: #999;
        font-style: italic;
    }
`;

export const CategoryList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const CategoryItem = styled.button`
    background: none;
    border: none;
    padding: 8px 12px;
    text-align: right;
    color: #666;
    cursor: pointer;
    border-radius: 4px;
    transition: all 0.2s ease;
    
    &:hover {
        background-color: #f0f0f0;
        color: #333;
    }
`;