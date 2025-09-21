import styled from "@emotion/styled";

export const Section = styled.section`
  width: 100%;
  padding: 3rem 2rem;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

export const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2rem;
  color: #c83771;
  margin-bottom: 2.5rem;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const Grid = styled.div`
  display: grid;
  gap: 1.5rem;
  
  /* A responsive grid that fits as many columns as possible */
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`;