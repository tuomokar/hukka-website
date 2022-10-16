import * as React from "react";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { Header } from "./header";

type Props = {
  children: React.ReactElement;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Main>
      <Header />

      <div>{children}</div>
    </Main>
  );
};

const Main = styled.div`
  color: "#232129";
  padding: 96;
  fontfamily: "-apple-system, Roboto, sans-serif, serif";

  max-width: 500px;
  margin: auto;
`;

export { Layout };
