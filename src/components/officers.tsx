import styled from "@emotion/styled";
import React, { FC } from "react";
import { officers } from "../constants/officers";

type NameLineProps = { roleScaName: string | null; roleMundaneName: string | null };
const OfficerRoleLine: FC<NameLineProps> = ({ roleScaName, roleMundaneName }) => {
  if (!roleScaName || !roleMundaneName) {
    return <OfficerLineText>{roleScaName ?? roleMundaneName}</OfficerLineText>;
  }

  return <OfficerLineText>{`${roleScaName} (${roleMundaneName})`}</OfficerLineText>;
};

const Officers: FC = () => (
  <div>
    {officers.map(({ scaName, mundaneName, role }) => (
      <OfficerContainer key={scaName}>
        <OfficerRoleLine roleScaName={role.scaName} roleMundaneName={role.mundaneName} />
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
