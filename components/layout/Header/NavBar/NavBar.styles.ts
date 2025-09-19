
import styled from "@emotion/styled";   

export const NavBar = styled.nav`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.5rem;
  padding: 0.6rem 1rem;
  background: white;
  border-top: 1px solid #eee;
  font-weight: 500;

  a {
    text-decoration: none;
    color: #80005e;
    transition: color 0.2s ease;

    &:hover {
      color: #c83771;
    }
  }
`;
