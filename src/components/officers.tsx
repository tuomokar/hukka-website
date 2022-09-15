import styled from '@emotion/styled';
import React, { FC } from 'react';
import { officers } from '../constants/officers';

const Officers: FC = () => (
  <div>
    {officers.map(({ scaName, mundaneName, role }) => (
      <OfficerContainer key={scaName}>
        <OfficerLineText>{`${role.scaName} (${role.mundaneName})`}</OfficerLineText>
        <OfficerLineText>{`${scaName} / (${mundaneName})`}</OfficerLineText>
        <OfficerLineText>{`${role.email}`}</OfficerLineText>
      </OfficerContainer>
    ))}
  </div>
)

const LinkContainer = styled.div`
  line-height: 30px;
`

const LinkText = styled.span`
  margin-left: 8px;
`

const OfficerContainer = styled.div`
  margin-top: 8px;
`

const OfficerLineText = styled.span`
  display: block;
  text-transform: capitalize;
`

export { Officers }