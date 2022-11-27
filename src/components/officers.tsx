import styled from "@emotion/styled";
import React, { FC } from "react";
import { getOfficerRoleName, officers } from "../constants/officers";

const Officers: FC = () => (
  <div>
    {officers.map(({ scaName, mundaneName, role }) => (
      <OfficerContainer key={scaName}>
        <OfficerLineText>{getOfficerRoleName(role)}</OfficerLineText>
        <OfficerLineText>{`${scaName} / ${mundaneName}`}</OfficerLineText>
        <OfficerEmailLineText>{`${role.email}`}</OfficerEmailLineText>
      </OfficerContainer>
    ))}
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
