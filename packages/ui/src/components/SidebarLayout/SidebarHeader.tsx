import styled from 'styled-components';
import { PropsWithChildren } from 'react';

const StyledSidebarHeader = styled.div`
  color: #fff;
  border-bottom: 1px solid #464747;
  height: 64px;
  padding: 24px 8px 16px 12px;
  display: flex;
  gap: 2px;

  font-family: Spoqa Han Sans Neo;
  font-size: 16px;
  font-weight: 250;
  line-height: 24px;
  text-align: left;
`;

const SidebarHeader = ({ children }: PropsWithChildren) => {
  return <StyledSidebarHeader>{children}</StyledSidebarHeader>;
};

export default SidebarHeader;
