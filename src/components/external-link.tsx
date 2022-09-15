import styled from '@emotion/styled';
import React, { FC } from 'react';

type Props = {
  children: string | React.ReactElement;
  href: string;
}

/**
 * Only meant for external links. For internal links use Gatsby's Link component.
 */
const ExternalLink: FC<Props> = ({ children, href }) => (
  <StyledAnchor href={href}>{children}</StyledAnchor>
)

const StyledAnchor = styled.a`
  text-decoration: none;
`

export { ExternalLink }