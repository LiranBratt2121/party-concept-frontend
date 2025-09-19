import styled from "@emotion/styled";

export const FooterContainer = styled.footer`
    background-color: #dfdfdfff;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 20px 40px;
    gap: 20px;
    min-height: 200px;
    
    @media (max-width: 768px) {
        flex-direction: column;
        gap: 30px;
    }
`;

export const Header = styled.h3`
    color: #808080;
    text-decoration: underline;
    text-underline-offset: 5px;
    margin-bottom: 15px;
    font-size: 16px;
    font-weight: 600;
`;

export const Section = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    max-width: 300px;
    
    &:first-of-type {
        flex: 1.5; /* Give more space to contact section */
    }
`;