import styled from 'styled-components';
import Sidebar from './Sidebar.tsx';
import {
  IconCalendar,
  IconCalendarStats,
  IconGauge,
  IconNotes,
} from '@tabler/icons-react';
import SidebarHeader from './SidebarHeader.tsx';
import BrandText from './BrandText.tsx';
import SidebarItems from './SidebarItems.tsx';
import SidebarItem from './SideItem.tsx';

const mockData = [
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
];

const Container = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
`;

type ContainerProps =
  typeof Container extends React.ComponentType<infer P> ? P : never;

const PageArea = styled.div`
  width: 100%;
`;

interface SidebarLayoutProps extends ContainerProps {}

const SidebarLayout = (props: SidebarLayoutProps) => {
  return (
    <Container>
      <Sidebar>
        <SidebarHeader>
          <BrandText>Smilegate</BrandText>
          <span>Admin</span>
        </SidebarHeader>
        <SidebarItems>
          <SidebarItem label={'인사'} icon={IconCalendar} />
          <SidebarItem label={'근태'} icon={IconCalendar} />
          <SidebarItem label={'총무'} icon={IconCalendar} />
        </SidebarItems>
      </Sidebar>
      <PageArea>{props.children}</PageArea>
    </Container>
  );
};

export default SidebarLayout;
