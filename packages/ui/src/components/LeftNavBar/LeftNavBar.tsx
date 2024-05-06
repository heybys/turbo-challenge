import { MantineProvider, ScrollArea } from '@mantine/core';
import {
  IconAdjustments,
  IconCalendarStats,
  IconFileAnalytics,
  IconGauge,
  IconLock,
  IconNotes,
  IconPresentationAnalytics,
} from '@tabler/icons-react';
import { UserButton } from './UserButton';
import { LinksGroup } from './NavbarLinksGroup';
import styled from 'styled-components';

const mockdata = [
  { label: 'Dashboard', icon: IconGauge },
  {
    label: 'Market news',
    icon: IconNotes,
    initiallyOpened: true,
    links: [
      { label: 'Overview', link: '/' },
      { label: 'Forecasts', link: '/' },
      { label: 'Outlook', link: '/' },
      { label: 'Real time', link: '/' },
    ],
  },
  {
    label: 'Releases',
    icon: IconCalendarStats,
    links: [
      { label: 'Upcoming releases', link: '/' },
      { label: 'Previous releases', link: '/' },
      { label: 'Releases schedule', link: '/' },
    ],
  },
  { label: 'Analytics', icon: IconPresentationAnalytics },
  { label: 'Contracts', icon: IconFileAnalytics },
  { label: 'Settings', icon: IconAdjustments },
  {
    label: 'Security',
    icon: IconLock,
    links: [
      { label: 'Enable 2FA', link: '/' },
      { label: 'Change password', link: '/' },
      { label: 'Recovery codes', link: '/' },
    ],
  },
];

const StyledNavbar = styled.nav`
  ${() => ({
    backgroundColor: '#282929',
    borderRight: `1px solid #464747`,
  })}
  width: 300px;
  padding: 4px 4px 0 4px;
  display: flex;
  flex-direction: column;
`;

const StyledHeader = styled.header`
  padding: 8px;
  ${({ theme }) => ({
    color: theme.color.gray95,
    borderRight: `1px solid ${theme.color.gray95} ${theme.color.gray10}`,
  })}
`;

const StyledScrollArea = styled(ScrollArea)`
  flex: 1;
  margin-left: calc(8px * -1);
  margin-right: calc(8px * -1);
`;

const StyledLinksInner = styled.div`
  padding-top: 16px;
  padding-bottom: 16px;
`;

const StyledFooter = styled.div`
  margin-left: calc(8px * -1);
  margin-right: calc(8px * -1);
  ${({ theme }) => ({
    borderTop: `1px solid ${theme.color.gray95} ${theme.color.gray10}`,
  })}
`;

const LeftNavBar = () => {
  const links = mockdata.map((item) => (
    <LinksGroup {...item} key={item.label} />
  ));

  return (
    <MantineProvider defaultColorScheme={'auto'}>
      <StyledNavbar>
        <StyledHeader>Hello</StyledHeader>
        <StyledScrollArea>
          <StyledLinksInner>{links}</StyledLinksInner>
        </StyledScrollArea>

        <StyledFooter>
          <UserButton />
        </StyledFooter>
      </StyledNavbar>
    </MantineProvider>
  );
};

export default LeftNavBar;
