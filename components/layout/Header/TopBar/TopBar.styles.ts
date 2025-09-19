import styled from "@emotion/styled";

export const TopBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #c83771;
  color: white;
  padding: 0.3rem 1rem;
  font-size: 0.9rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    text-align: center;
  }
`;

export const TopLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

export const TopRight = styled.div`
  font-weight: bold;
`;

export const IconLink = styled.a`
  display: flex;
  align-items: center;
  color: white;
  font-size: 1rem;
  &:hover {
    opacity: 0.8;
  }
`;

export const StoreLink = styled.a`
  margin-right: 1rem;
  background: rgba(255,255,255,0.2);
  padding: 0.3rem 0.7rem;
  border-radius: 15px;
  font-size: 0.85rem;
  color: white;
  text-decoration: none;
  &:hover {
    background: rgba(255,255,255,0.3);
  }
`;