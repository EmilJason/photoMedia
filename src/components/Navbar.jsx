import styled from "styled-components";

const Nav = styled.nav`
  width: 100%;
  background-color: teal;
  padding: 0.5rem 1rem;
`;
const Header = styled.h3`
  font-family: Arial, Helvetica, sans-serif;
  letter-spacing: 0.2rem;
  color: white;
  text-transform: uppercase;
  font-weight: 3rem;
`;

export default function Navbar() {
  return (
    <>
      <Nav>
        <Header>Photo Album</Header>
      </Nav>
    </>
  );
}
