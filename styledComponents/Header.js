import styled from "styled-components";

const HeaderStyled = styled.header`
  padding-top: 10rem;
  padding-bottom: calc(10rem - 4.5rem);
  background-image: url(/bgMusic.jpeg);
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-size: cover; ;
`;

export default function Header({ children }) {
  return <HeaderStyled>{children}</HeaderStyled>;
}
