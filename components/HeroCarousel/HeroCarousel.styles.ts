import styled from "@emotion/styled";
export const CarouselWrapper = styled.section`
  position: relative;
  width: 100%;
  height: 50vh; /* Adjust height as needed */
  overflow: hidden;
  @media (max-width: 768px) {
    height: 30vh;
  }
`;

export const Slide = styled.div<{ isActive: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: ${({ isActive }) => (isActive ? 1 : 0)};
  transition: opacity 0.8s ease-in-out;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const DotsContainer = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
`;

export const Dot = styled.button<{ isActive: boolean }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid white;
  background-color: ${({ isActive }) => (isActive ? "white" : "transparent")};
  cursor: pointer;
  padding: 0;
  transition: background-color 0.3s ease;
`;

export const Button = styled.button<{ position: "left" | "right" }>`
  position: absolute;
  top: 50%;
  ${({ position }) => (position === "left" ? "left: 15px" : "right: 15px")};
  z-index: 1;
  background: none;
  border: none;
  cursor: pointer;
  color: white;
  font-size: 24px;
  transition: color 0.3s ease;

  &:hover {
    color: #ccc;
  }

`