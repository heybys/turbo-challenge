import styled from 'styled-components';

const StyledSidebar = styled.div`
  background-color: #282929;
  width: 100%;
`;

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

const Sidebar = ({ children, ...props }: SidebarProps) => {
  return <StyledSidebar {...props}>{children}</StyledSidebar>;
};

export default Sidebar;
