import styled from "@emotion/styled";
import React, { FC } from "react";
import { getOfficerRoleName, officers } from "../constants/officers";

const Officers: FC = () => (
  <div>
    <ul>
      {officers.map(({ scaName, mundaneName, role }) => (
        <li key={scaName}>
          <OfficerContainer>
            <OfficerLineText>{getOfficerRoleName(role)}</OfficerLineText>
            <OfficerLineText>{`${scaName} / ${mundaneName}`}</OfficerLineText>
            <OfficerEmailLineText>{`${role.emailStart} (at) hukka.org`}</OfficerEmailLineText>
          </OfficerContainer>
        </li>
      ))}
    </ul>
  </div>
);

const OfficerContainer = styled.div`
  margin-top: 8px;
`;

const OfficerLineText = styled.span`
  display: block;
  &:first-letter {
    text-transform: capitalize;
  }
`;

const OfficerEmailLineText = styled.span`
  display: block;
  font-size: 0.9rem;
`;

export { Officers };
