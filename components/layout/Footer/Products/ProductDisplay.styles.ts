import styled from "@emotion/styled";

export const ProductContainerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    
    @media (min-width: 768px) {
        flex-direction: row;
        gap: 10px;
    }
`;