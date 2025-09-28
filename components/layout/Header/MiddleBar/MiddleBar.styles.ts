import styled from "@emotion/styled";
import Image from "next/image";

export const MiddleBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  background: white;
  border-bottom: 1px solid #eee;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
  }
`;

export const Actions = styled.div`
  display: flex;
  gap: 0.7rem;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: space-around;
  }
`;

export const Logo = styled(Image)`
    z-index: 10;

  @media (max-width: 768px) {
    order: -1; // Display logo first on mobile
    width: 280px;
    height: auto; // Maintain aspect ratio
  }

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.5rem 1rem;
  border: 1px solid #c83771;
  color: #c83771;
  background: white;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.9rem;

  &:hover {
    background: #fbe6ef;
  }
`;

export const SearchWrapper = styled.div`
  @media (max-width: 768px) {
    width: 100%;
  }

  input {
    padding: 0.5rem 1rem;
    border: 1px solid #ccc;
    border-radius: 20px;
    font-size: 0.9rem;
    min-width: 220px;

    @media (max-width: 768px) {
      width: 100%;
    }
  }
`;