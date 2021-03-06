import styled from "styled-components";

const StyledContainer = styled.div`
  height: 100vh;
  width: 100%;
`;
export default function Container({ children }) {
  return <StyledContainer>{children}</StyledContainer>;
}
