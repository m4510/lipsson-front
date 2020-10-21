import styled from "styled-components";

const ProductsStyled = styled.section`
  padding: 3rem 0;
  background-color: #303030;
  font-family: "Ruda", sans-serif;
  color: white;
`;

const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px; /* 5px rounded corners */
`;

export default function Products({ children }) {
  return (
    <ProductsStyled>
      <div className="row center-xs middle-xs">
        <div className="col-lg-12 col-xs-12">
          <h1 style={{ fontSize: "3rem" }}>
            <b>Paquetes</b>
          </h1>
        </div>
      </div>
      <div className="row center-xs middle-xs">
        <div className="col-lg-3 col-xs-12">
          <Card>
            <h4>
              <b>Paquete #1</b>
            </h4>
            <p>
              Paquete completo con dj musica pista equipo de sonido e
              iluminación
            </p>
          </Card>
        </div>
        <div className="col-lg-3 col-xs-12">
          <Card>
            <h4>
              <b>Paquete #2</b>
            </h4>
            <p>Equipo de sonido con luces dj </p>
          </Card>
        </div>
        <div className="col-lg-3 col-xs-12">
          <Card>
            <h4>
              <b>Paquete #3</b>
            </h4>
            <p>Equipo de sonido , solamente bocinas y dj</p>
          </Card>
        </div>
      </div>
    </ProductsStyled>
  );
}
