import NavLink from "./NavLink";
import styled from "styled-components";

const StyledNav = styled.section`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030;
  background-color: #303030;
`;

export default function Nav() {
  return (
    <StyledNav>
      <div className="row center-xs">
        <div className="col-lg-3 col-xs-12">
          <NavLink text="¿Quienes Somos?" />
        </div>
        <div className="col-lg-3 col-xs-12">
          <NavLink text="Contactanos" />
        </div>
        <div className="col-lg-3  col-xs-12">
          <NavLink text="Paquetes" />
        </div>
      </div>
    </StyledNav>
  );
}
