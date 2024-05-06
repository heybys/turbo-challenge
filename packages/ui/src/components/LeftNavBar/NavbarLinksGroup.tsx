import { ForwardRefExoticComponent, RefAttributes, useState } from 'react';
import {
  Group,
  Box,
  Collapse,
  ThemeIcon,
  Text,
  UnstyledButton,
  rem,
} from '@mantine/core';
import {
  Icon,
  IconCalendarStats,
  IconChevronRight,
  IconProps,
} from '@tabler/icons-react';
import styled from 'styled-components';

interface LinksGroupProps {
  icon: ForwardRefExoticComponent<Omit<IconProps, 'ref'> & RefAttributes<Icon>>;
  label: string;
  initiallyOpened?: boolean;
  links?: { label: string; link: string }[];
}

type UnstyledButtonProps =
  typeof UnstyledButton extends React.ComponentType<infer P> ? P : never;

const StyledButton = styled(UnstyledButton)<UnstyledButtonProps>`
  font-weight: 500;
  display: block;
  width: 100%;

  ${({ theme }) => ({
    padding: '4px 8px',
    color: theme.color.primary40,
    fontSize: theme.typography.fontSize16,
  })};

  &:hover {
    ${({ theme }) => ({
      backgroundColor: theme.color.gray50,
      color: theme.color.gray30,
    })};
  }
`;

type TextProps = typeof Text extends React.ComponentType<infer P> ? P : never;
const StyledText = styled(Text)<TextProps>`
  font-weight: 500;
  display: block;
  text-decoration: none;
  padding: 4px 8px;
  margin-left: 16px;
  font-size: 4px;

  ${({ theme }) => ({
    color: theme.color.gray95,
    borderLeft: `1px solid ${theme.color.gray95} ${theme.color.gray10}`,
  })}
  &:hover {
    ${({ theme }) => ({
      backgroundColor: theme.color.gray20,
      color: theme.color.gray30,
    })}
  }
`;

export function LinksGroup({
  icon: Icon,
  label,
  initiallyOpened,
  links,
}: LinksGroupProps) {
  const hasLinks = Array.isArray(links);
  const [opened, setOpened] = useState(initiallyOpened || false);
  const items = (hasLinks ? links : []).map((link) => (
    <StyledText<'a'>
      component="a"
      href={link.link}
      key={link.label}
      onClick={(event) => event.preventDefault()}
    >
      {link.label}
    </StyledText>
  ));

  return (
    <>
      <StyledButton onClick={() => setOpened((o) => !o)}>
        <Group justify="space-between" gap={0}>
          <Box style={{ display: 'flex', alignItems: 'center' }}>
            {/*<ThemeIcon variant="light" size={30}>*/}
            <Icon style={{ width: rem(18), height: rem(18) }} />
            {/*</ThemeIcon>*/}
            <Box ml="md">{label}</Box>
          </Box>
          {hasLinks && (
            <IconChevronRight
              stroke={1.5}
              style={{
                width: rem(16),
                height: rem(16),
                transform: opened ? 'rotate(-90deg)' : 'none',
                transition: 'transform 200ms ease',
              }}
            />
          )}
        </Group>
      </StyledButton>
      {hasLinks ? <Collapse in={opened}>{items}</Collapse> : null}
    </>
  );
}

const mockdata = {
  label: 'Releases',
  icon: IconCalendarStats,
  links: [
    { label: 'Upcoming releases', link: '/' },
    { label: 'Previous releases', link: '/' },
    { label: 'Releases schedule', link: '/' },
  ],
};

export function NavbarLinksGroup() {
  return (
    <Box mih={220} p="md">
      <LinksGroup {...mockdata} />
    </Box>
  );
}
