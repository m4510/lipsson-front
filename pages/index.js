import BaseLayout from "../layouts/BaseLayout";
import styled from "styled-components";
import Nav from "../styledComponents/Nav";
import Header from "../styledComponents/Header";
import AboutUs from "../styledComponents/AboutUs";
import Products from "../styledComponents/Products";

const ParagraphAboutUs = styled.p`
  font-size: 23px;
  color: lightgrey;
  padding: 2px;
  letter-spacing: 3px;
`;

export default function Home() {
  return (
    <>
      <BaseLayout pageTitle="Lippson" description="Esta es una descripcion">
        <Nav />
        <Header>
          <div>Hola mundo</div>
          <div>Hola mundo</div>
          <div>Hola mundo</div>
          <div>Hola mundo</div>
          <div>Hola mundo</div>
          <div>Hola mundo</div>
          <div>Hola mundo</div>
          <div>Hola mundo</div>
          <div>Hola mundo</div>
          <div>Hola mundo</div>
          <div>Hola mundo</div>
          <div>Hola mundo</div>
          <div>Hola mundo</div>
          <div>Hola mundo</div> <div>Hola mundo</div> <div>Hola mundo</div>{" "}
          <div>Hola mundo</div> <div>Hola mundo</div> <div>Hola mundo</div>{" "}
          <div>Hola mundo</div> <div>Hola mundo</div> <div>Hola mundo</div>{" "}
          <div>Hola mundo</div> <div>Hola mundo</div> <div>Hola mundo</div>{" "}
          <div>Hola mundo</div> <div>Hola mundo</div> <div>Hola mundo</div>{" "}
          <div>Hola mundo</div> <div>Hola mundo</div> <div>Hola mundo</div>
        </Header>
        <AboutUs>
          <h1 style={{ fontSize: "3rem" }}>Lippson</h1>
          <h1 style={{ fontSize: "3rem" }}>{`__________`}</h1>
          <ParagraphAboutUs>
            Somos una empresa dedicada a la musica la cual ofrece paquetes para
            tus fiestas reuniones bodas con la mejor calidad y las mejores
            tecnologias para que tus fiestas sean aparte de divertidas las mas
            actualizadas con los diferentes generos musicales a tu eleccion, con
            paquetes acorde a tus necesidades.
          </ParagraphAboutUs>
        </AboutUs>
        <Products />
      </BaseLayout>
    </>
  );
}
