import Head from "next/head";
import Container from "../styledComponents/Container";

export default function BaseLayout({
  children,
  pageTitle,
  description,
  ...props
}) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <link
          href="https://fonts.googleapis.com/css2?family=Lobster&display=swap"
          rel="stylesheet"
        ></link>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/flexboxgrid/6.3.1/flexboxgrid.min.css"
          type="text/css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Ruda&display=swap"
          rel="stylesheet"
        ></link>

        <title>{pageTitle}</title>
      </Head>
      <Container>{children}</Container>
    </>
  );
}
