import styled from "styled-components";

const AboutUsStyled = styled.section`
  padding: 8rem, 0;
  background-color: #f4623a;
  font-family: "Ruda", sans-serif;
  color: white;
`;

export default function AboutUs({ children }) {
  return (
    <AboutUsStyled>
      <div className="container">
        <div className="row center-xs middle-xs">
          <div className="col-lg-8 col-xs-12">{children}</div>
        </div>
      </div>
    </AboutUsStyled>
  );
}
