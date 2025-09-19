import styled from "@emotion/styled";

export const FollowUsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const FacebookEmbed = styled.iframe`
    width: 280px;
    height: 300px;
    border: none;
    border-radius: 8px;
    overflow: hidden;
    
    @media (max-width: 768px) {
        width: 100%;
        height: 300px;
    }
`;

export const SocialLink = styled.a`
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: #666;
    text-decoration: none;
    padding: 8px 0;
    font-size: 14px;
    
    &:hover {
        color: #1877f2;
    }
`;