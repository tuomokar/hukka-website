import React, { FC } from "react";
import VarttinaAndVaripataInformationTextEnglish from "../../../content/events/varttinaAndVaripata/VarttinaAndVaripataEn.mdx";
import { HeadFC, Link } from "gatsby";
import styled from "@emotion/styled";
import { StaticImage } from "gatsby-plugin-image";

const VarttinaAndVaripataInformation: FC = () => (
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
      <VarttinaAndVaripataInformationTextEnglish />
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

export default VarttinaAndVaripataInformation;

export const Head: HeadFC = () => <title>Värttinä ja väripata</title>;
