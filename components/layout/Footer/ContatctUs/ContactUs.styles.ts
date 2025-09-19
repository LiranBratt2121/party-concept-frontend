import styled from "@emotion/styled";

export const ContactUsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const ContactField = styled.p`
    margin: 0;
    color: #666;
    font-size: 14px;
    line-height: 1.4;
    direction: rtl;
    text-align: right;
    
    &:hover {
        color: #333;
    }
`;

export const ContactLink = styled.a`
    color: #666;
    text-decoration: none;
    
    &:hover {
        color: #0066cc;
        text-decoration: underline;
    }
`;