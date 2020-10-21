import styled from "styled-components";

const StyledButton = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${(props) => (props.primary ? "#48D1CC" : "white")};
  color: ${(props) => (props.primary ? "white" : "#48D1CC")};
  cursor: pointer;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #48d1cc;
  border-radius: 3px;
`;

const Button = ({ btnText, ...props }) => {
  return <StyledButton {...props}>{btnText}</StyledButton>;
};

export default Button;
