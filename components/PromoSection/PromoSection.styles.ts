import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";

// Main section wrapper
export const PromoWrapper = styled.section`
  position: relative;
  background-color: #4a6482; /* Muted blue */
  color: white;
  padding: 8rem 3rem 5rem 3rem;
  direction: rtl;

  @media (max-width: 768px) {
    padding: 6rem 1.5rem 3rem 1.5rem;
  }
`;

// Wave shape at top
export const WaveShape = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);

  svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 75px;
  }

  .shape-fill {
    fill: #ffffff;
  }
`;

// Two-column layout
export const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 992px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

export const Column = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const LeftColumn = styled(Column)`
  align-items: center;
  justify-content: center;
  gap: 1rem;
  text-align: center;
`;

export const RightColumn = styled(Column)`
  gap: 1.5rem;
  text-align: right;

  @media (max-width: 992px) {
    text-align: center;
    align-items: center;
  }
`;

// Logo + Socials
export const LogoImage = styled(Image)`
  max-width: 350px;
  height: auto;
`;

export const PromoButton = styled.div`
  background: linear-gradient(to bottom, #e6007e, #a00056);
  color: white;
  font-size: 1.4rem;
  font-weight: 700;
  padding: 0.7rem 1.5rem;
  border-radius: 8px;
  margin-top: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  text-align: center;
  display: inline-block;
  cursor: pointer;
  transform: skew(-5deg);

  &:hover {
    opacity: 0.9;
    transform: scale(1.05) skew(-5deg);
  }
`;

export const SocialsWrapper = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-top: 1rem;
`;

export const IconLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  color: white;
  font-size: 1.5rem;
  text-decoration: none;
  transition: transform 0.2s ease, opacity 0.2s ease;

  &:hover {
    transform: scale(1.1);
    opacity: 0.9;
  }

  &.whatsapp {
    background-color: #25d366;
  }
  &.email {
    background-color: #333333;
  }
  &.facebook {
    background-color: #1877f2;
  }
`;

// Text elements
export const Heading = styled.h2`
  font-size: 1.6rem;
  font-weight: 700;
  margin: 0 0 0.5rem 0;
`;

export const Subheading = styled.p`
  font-size: 1.2rem;
  margin: 0;
  font-weight: 500;
`;

export const InfoText = styled.p`
  font-size: 0.95rem;
  line-height: 1.6;
  margin: 0;
  max-width: 500px;
`;

export const InfoList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    margin-bottom: 0.5rem;
  }
`;
