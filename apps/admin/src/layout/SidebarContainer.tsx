import styled from 'styled-components';
import { Icon, IconCalendar, IconGauge, IconProps } from '@tabler/icons-react';
import BrandText from './BrandText.tsx';
import { Sidebar, SidebarHeader, SidebarItem, SidebarItems } from '@repo/ui';
import {
  ForwardRefExoticComponent,
  PropsWithChildren,
  RefAttributes,
} from 'react';
import { useNavigate } from 'react-router-dom';

interface Item {
  icon?: ForwardRefExoticComponent<
    Omit<IconProps, 'ref'> & RefAttributes<Icon>
  >;
  label: string;
  path?: string;
  items?: Item[];
  isLeaf?: boolean;
}

const mockData: Item[] = [
  { label: '인사', icon: IconGauge },
  {
    label: '근태',
    icon: IconCalendar,
    items: [
      {
        label: '모니터링',
      },
      {
        label: '설정',
        items: [
          { label: '휴일관리', path: '/', isLeaf: true },
          { label: '근무제도 설정', path: '/movies', isLeaf: true },
          { label: '근태유형 기준관리', path: '/products', isLeaf: true },
          { label: '근무공간 관리', path: '/ui', isLeaf: true },
        ],
      },
      {
        label: '신청현황',
      },
      {
        label: '근태현황',
      },
      {
        label: '마감 및 집계',
      },
    ],
  },
  {
    label: '총무',
    icon: IconCalendar,
    items: [
      { label: '휴일관리', path: '/', isLeaf: true },
      { label: '근무제도 설정', path: '/', isLeaf: true },
      { label: '근태유형 기준관리', path: '/', isLeaf: true },
      { label: '근무공간 관리', path: '/', isLeaf: true },
    ],
  },
];

const Container = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
`;

const SidebarArea = styled(Sidebar)`
  width: 230px;
  flex-shrink: 0;
`;

const PageArea = styled.div`
  flex-grow: 1;
`;

const SidebarContainer = ({ children }: PropsWithChildren) => {
  const navigate = useNavigate();

  const recursiveMap = (menus: Item[], depth: number) => {
    return menus.map((menu) => {
      return (
        <SidebarItem
          key={menu.label}
          label={menu.label}
          icon={menu.icon}
          type={menu.isLeaf ? 'menu' : 'category'}
          onClick={() => {
            menu.path && navigate(menu.path);
          }}
          depth={depth}
        >
          {menu.items && recursiveMap(menu.items, depth + 1)}
        </SidebarItem>
      );
    });
  };

  return (
    <Container>
      <SidebarArea>
        <SidebarHeader
          onClick={() => {
            navigate('/');
          }}
        >
          <BrandText>Smilegate</BrandText>
          <span>Admin</span>
        </SidebarHeader>
        <SidebarItems>{recursiveMap(mockData, 0)}</SidebarItems>
      </SidebarArea>
      <PageArea>{children}</PageArea>
    </Container>
  );
};

export default SidebarContainer;
