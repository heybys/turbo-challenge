import styled from 'styled-components';
import { PropsWithChildren } from 'react';

const StyledSidebar = styled.div`
  background-color: #282929;
  width: 230px;
`;

const Sidebar = ({ children }: PropsWithChildren) => {
  return <StyledSidebar>{children}</StyledSidebar>;
};

export default Sidebar;
