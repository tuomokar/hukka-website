import * as React from "react";
import styled from "@emotion/styled";
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
  color: #232129;
  font-family: "-apple-system, Roboto, sans-serif, serif";

  max-width: 500px;
  margin: auto;

  margin-bottom: 100px;
`;

export { Layout };
