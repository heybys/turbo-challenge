import styled from 'styled-components';
import {
  ForwardRefExoticComponent,
  MouseEventHandler,
  PropsWithChildren,
  RefAttributes,
  useState,
} from 'react';
import { Icon, IconMinus, IconPlus, IconProps } from '@tabler/icons-react';
import useItems from './useItems.ts';

const Indicator = styled.div`
  width: 20px;
  height: 20px;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 12px;
    height: 12px;
    color: #dde0df;
  }
`;

const Label = styled.div<
  React.HTMLAttributes<HTMLDivElement> & { color: string }
>`
  font-family: 'Spoqa Han Sans Neo', sans-serif;
  font-size: 13px;
  font-weight: 400;
  line-height: 19.5px;
  text-align: left;
  color: ${({ color }) => color};
`;

const IconWrapper = styled.div<
  React.HTMLAttributes<HTMLDivElement> & { color: string }
>`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 16px;
    height: 16px;
    color: ${({ color }) => color};
  }
`;

const SelectorInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2px;
  height: 20px;
  flex-grow: 1;
`;

const Selector = styled.div<
  React.HTMLAttributes<HTMLDivElement> & {
    backgroundColor: string;
    paddingLeft: string;
  }
>`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 8px 10px ${({ paddingLeft }) => paddingLeft};
  height: 40px;
  cursor: pointer;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

const SubItems = styled.div``;

const StyledSidebarItem = styled.div``;

interface SidebarItemProps extends PropsWithChildren {
  icon?: ForwardRefExoticComponent<
    Omit<IconProps, 'ref'> & RefAttributes<Icon>
  >;
  label: string;
  selected?: boolean;
  type?: 'category' | 'menu';
  depth: number;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

const SidebarItem = ({
  icon: Icon,
  label,
  type = 'category',
  depth,
  onClick,
  children,
}: SidebarItemProps) => {
  const { selectedItems, select } = useItems();
  const [open, setOpen] = useState(false);

  const isSelected = selectedItems.includes(label);

  const handleClick: MouseEventHandler<HTMLDivElement> = (event) => {
    setOpen(!open);
    select(depth, label);
    onClick && onClick(event);
  };

  const getSelectorBackgroundColor = () => {
    const backgroundColor = type === 'category' ? '#282929' : '#1F1F1F';
    const activeBackgroundColor = type === 'category' ? '#282929' : '#2D9BB2';

    return isSelected ? activeBackgroundColor : backgroundColor;
  };

  const getSelectorPaddingLeft = () => {
    return depth === 2 && type === 'menu' ? '36px' : '14px';
  };

  const getIconColor = () => {
    const color = type === 'category' ? 'white' : '#DDE0DF';
    const activeColor = type === 'category' ? '#8BF0E9' : 'white';

    return isSelected ? activeColor : color;
  };

  const getLabelColor = () => {
    const color = type === 'category' ? 'white' : '#DDE0DF';
    const activeColor = type === 'category' ? '#8BF0E9' : 'white';

    return isSelected ? activeColor : color;
  };

  return (
    <StyledSidebarItem>
      <Selector
        onClick={handleClick}
        backgroundColor={getSelectorBackgroundColor()}
        paddingLeft={getSelectorPaddingLeft()}
      >
        <SelectorInfo>
          <IconWrapper color={getIconColor()}>{Icon && <Icon />}</IconWrapper>
          <Label color={getLabelColor()}>{label}</Label>
        </SelectorInfo>
        <Indicator hidden={!children}>
          {isSelected ? <IconMinus /> : <IconPlus />}
        </Indicator>
      </Selector>
      <SubItems hidden={!isSelected}>{children}</SubItems>
    </StyledSidebarItem>
  );
};

export default SidebarItem;
