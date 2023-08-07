import * as React from "react";
import type { HeadFC } from "gatsby";
import styled from "@emotion/styled";
import { Layout } from "../components/layout";
import { ExternalLink } from "../components/external-link";
import { Officers } from "../components/officers";

const ContactInfoPage = () => {
  return (
    <Layout>
      <>
        <div>
          <h2>Yhteystiedot</h2>
        </div>

        <div>
          <InformationTitle>Jäseneksi liittyminen</InformationTitle>
          <div>
            <span>
              Voit tulla mukaan kaikkeen toimintaamme myös ilman jäsenyyttä, mutta jäsenet saavat etuja
              tapahtumamaksuissa ja jäsenmaksu tukee yhdistyksen toimintaa.
            </span>
            <p />
            <span>Lisätietoa jäseneksi liittymisestä ja jäsenlomakkeen linkin löydät kattoseuramme </span>
            <ExternalLink href="https://www.aarnimetsa.org/keskiaikaseura-yhdistyksena/jasenyys/">
              Suomen keskiaikaseura ry:n sivuilta.
            </ExternalLink>
          </div>
        </div>

        <RequestFormFrame
          id="request-form"
          title="information-channel-join-request-form"
          src="https://docs.google.com/forms/d/e/1FAIpQLSdOCQYNoFfpPb2GJIz-L5NtOonPhLlYCnmUr-jTRhBOR8eEJw/viewform?embedded=true"
          height="1000"
        >
          Loading…
        </RequestFormFrame>

        <div>
          <h3>Virkailijat</h3>

          <Officers />
        </div>
      </>
    </Layout>
  );
};

const RequestFormFrame = styled.iframe`
  margin: 32px 0 32px 0;
  width: 100%;
`;

const InformationTitle = styled.h3`
  margin-bottom: 4px;
`;

export default ContactInfoPage;

export const Head: HeadFC = () => <title>Hucan pitäjä - Yhteystiedot</title>;
