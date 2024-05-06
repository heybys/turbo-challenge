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
  path: string;
  items?: Item[];
  isLeaf?: boolean;
}

const mockData: Item[] = [
  { label: '인사', icon: IconGauge, path: '/hrm' },
  {
    label: '근태',
    icon: IconCalendar,
    path: '/tlm',
    items: [
      {
        label: '모니터링',
        path: '/tlm/monitor',
      },
      {
        label: '설정',
        path: '/tlm/settings',
        items: [
          { label: '휴일관리', path: '/tlm/settings/holidays', isLeaf: true },
          {
            label: '근무제도 설정',
            path: '/tlm/settings/work-policy',
            isLeaf: true,
          },
          {
            label: '근태유형 기준관리',
            path: '/tlm/settings/work-type',
            isLeaf: true,
          },
          {
            label: '근무공간 관리',
            path: '/tlm/settings/work-space',
            isLeaf: true,
          },
        ],
      },
      {
        label: '신청현황',
        path: '/tlm/subscription',
      },
      {
        label: '근태현황',
        path: '/tlm/attendance',
      },
      {
        label: '마감 및 집계',
        path: '/tlm/statistics',
      },
    ],
  },
  {
    label: '총무',
    icon: IconCalendar,
    path: '/gea',
    items: [
      { label: '휴일관리', path: '/gea/holidays', isLeaf: true },
      { label: '근무제도 설정', path: '/gea/work-policy', isLeaf: true },
      { label: '근태유형 기준관리', path: '/gea/work-type', isLeaf: true },
      { label: '근무공간 관리', path: '/gea/work-space', isLeaf: true },
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
      const handleClick = () => {
        if (!menu.path.startsWith('/gea')) window.location.href = menu.path;
        navigate(menu.path);
      };

      return (
        <SidebarItem
          key={menu.label}
          icon={menu.icon}
          label={menu.label}
          path={menu.path}
          type={menu.isLeaf ? 'menu' : 'category'}
          onClick={menu.isLeaf ? handleClick : undefined}
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
          <span>Admin GEA</span>
        </SidebarHeader>
        <SidebarItems>{recursiveMap(mockData, 0)}</SidebarItems>
      </SidebarArea>
      <PageArea>{children}</PageArea>
    </Container>
  );
};

export default SidebarContainer;
