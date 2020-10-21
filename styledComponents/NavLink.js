import styled from "styled-components";

const StyledNavLink = styled.li`
  padding: 2rem;
  text-decoration: none;
  list-style-type: none;
  cursor: pointer;
  color: grey;
  font-size: 2rem;
  opacity: 0.8;
  font-family: "Lobster", cursive;
  letter-spacing: 4px;
  &:hover {
    color: #ffffff;
  }
`;

export default function NavLink({ text, ...props }) {
  return (
    <StyledNavLink {...props}>
      <a>{text}</a>
    </StyledNavLink>
  );
}
