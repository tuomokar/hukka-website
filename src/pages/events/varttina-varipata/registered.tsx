import React, { FC } from "react";
import { HeadFC, Link } from "gatsby";
import styled from "@emotion/styled";
import { StaticImage } from "gatsby-plugin-image";

const Registered: FC = () => (
  <Container>
    <HeaderContainer>
      <StaticImage src="../../../images/hukka-device.png" alt="Hucan vaakuna" />

      <NavigationContainer>
        <StyledInternalLink to="/events/varttina-varipata">Tapahtumainfo suomeksi</StyledInternalLink>
        <StyledInternalLink to="/events/varttina-varipata/en">Event information in English</StyledInternalLink>
        <StyledInternalLink to="/events/varttina-varipata/registered">Ilmoittautuneet / Registered</StyledInternalLink>
      </NavigationContainer>
    </HeaderContainer>

    <ContentContainer>
      <div>
        <h1>Värttinä ja väripata</h1>
      </div>
      <div>
        <p>
          <span>
            Tänne tulee lista tapahtumaan ilmoittautuneista henkilöistä, jotka ovat antaneet luvan listata
            keskiaikanimensä / This page will have a list of the people registered who have given their permission to
            list their SCA name here.
          </span>
        </p>
      </div>
    </ContentContainer>
  </Container>
);

const Container = styled.div`
  color: #232129;
  font-family: "-apple-system, Roboto, sans-serif, serif";

  max-width: 1200px;
  margin: auto;

  margin-bottom: 100px;
`;

const ContentContainer = styled.div`
  margin: 36px;
`;

const HeaderContainer = styled.div`
  text-align: center;
`;

const NavigationContainer = styled.div`
  margin-top: 16px;
`;

const StyledInternalLink = styled(Link)`
  text-decoration: none;
  display: block;
  margin-bottom: 2px;
`;

export default Registered;

export const Head: HeadFC = () => <title>Värttinä ja väripata</title>;
