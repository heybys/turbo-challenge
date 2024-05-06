import styled from 'styled-components';
import { PropsWithChildren } from 'react';

const StyledSidebarItems = styled.div`
  padding: 8px 0 0 0;
`;

const SidebarItems = ({ children }: PropsWithChildren) => {
  return <StyledSidebarItems>{children}</StyledSidebarItems>;
};

export default SidebarItems;
