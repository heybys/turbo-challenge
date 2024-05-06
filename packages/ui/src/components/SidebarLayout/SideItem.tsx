import styled from 'styled-components';
import { ForwardRefExoticComponent, RefAttributes, useState } from 'react';
import { Icon, IconMinus, IconPlus, IconProps } from '@tabler/icons-react';

const Label = styled.div`
  font-family: Spoqa Han Sans Neo;
  font-size: 13px;
  font-weight: 400;
  line-height: 19.5px;
  text-align: left;
`;

const Inner = styled.div<
  React.HTMLAttributes<HTMLDivElement> & { isOpen: boolean }
>`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2px;
  height: 20px;
  color: #ffffff;
  flex-grow: 1;

  svg {
    color: #dde0df;
  }

  ${({ isOpen }) =>
    isOpen && {
      color: '#8BF0E9',
      svg: {
        color: '#8BF0E9',
      },
    }}
  ${Label} {
    ${({ isOpen }) =>
      isOpen && {
        fontWeight: 500,
      }}
  }
`;

const Indicator = styled.div`
  width: 20px;
  height: 20px;
  padding: 4px;
  display: flex;
  align-items: center;
`;

const StyledSidebarItem = styled.div<
  React.HTMLAttributes<HTMLDivElement> & {
    onClick: () => void;
  }
>`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 8px 10px 14px;
  height: 40px;
  cursor: pointer;
`;

interface SidebarItemProps {
  label?: string;
  icon?: ForwardRefExoticComponent<
    Omit<IconProps, 'ref'> & RefAttributes<Icon>
  >;
  selected?: boolean;
}

const SidebarItem = ({ label, icon: Icon, selected }: SidebarItemProps) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const isOpen = selected !== undefined ? selected : open;

  return (
    <StyledSidebarItem onClick={handleClick}>
      <Inner isOpen={isOpen}>
        {Icon && <Icon width={16} height={16} />}
        <Label>{label}</Label>
      </Inner>
      <Indicator>
        {!isOpen && <IconPlus width={12} height={12} color={'#DDE0DF'} />}
        {isOpen && <IconMinus width={12} height={12} color={'#DDE0DF'} />}
      </Indicator>
    </StyledSidebarItem>
  );
};

export default SidebarItem;
