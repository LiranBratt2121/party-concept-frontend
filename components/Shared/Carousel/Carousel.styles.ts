import styled from "@emotion/styled";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const CarouselViewport = styled.div`
  overflow: hidden;
`;

export const KeenSlider = styled.div`
  display: flex;
`;

export const ArrowButton = styled.button<{ position: "left" | "right" }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${({ position }) => (position === "left" ? "left: 8px;" : "right: 8px;")}
  background: rgba(0, 0, 0, 0.5);
  border: none;
  color: white;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  z-index: 10;

  &:hover {
    background: rgba(0, 0, 0, 0.7);
  }
`;
