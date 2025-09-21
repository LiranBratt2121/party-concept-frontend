import styled from "@emotion/styled"

export const CardWrapper = styled.div`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  color: white;
  text-decoration: none;
  cursor: pointer;
  border-radius: 30%;
  
  
  img {
    transition: transform 0.4s ease;
  }

  &:hover {
    img {
      transform: scale(1.1);
    }
  }
`;

export const ImageWrapper = styled.div`
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  text-align: center;
`;

export const CategoryName = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0;
`;