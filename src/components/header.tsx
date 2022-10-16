import * as React from "react";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const Header = () => {
  return (
    <Container>
      <div>
        <Title>Hucan pitäjä</Title>
      </div>

      <div>
        <Link to="/">
          <StaticImage src="../images/hukka-device.png" alt="Hucan vaakuna" />
        </Link>
      </div>

      <NavigationContainer>
        <StyledInternalLink to="/">Hucan pitäjä</StyledInternalLink>
        <StyledInternalLink to="/calendar">Kalenteri</StyledInternalLink>
        <StyledInternalLink to="/contact-info">Yhteystiedot</StyledInternalLink>
      </NavigationContainer>
    </Container>
  );
};

const Container = styled.div`
  text-align: center;
`;

const NavigationContainer = styled.div`
  margin-top: 16px;
`;

const Title = styled.h1`
  text-align: center;
`;

const StyledInternalLink = styled(Link)`
  text-decoration: none;
  margin-right: 8px;
`;

export { Header };
