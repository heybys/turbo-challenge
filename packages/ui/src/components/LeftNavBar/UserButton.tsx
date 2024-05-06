import { Avatar, Group, Text, UnstyledButton } from '@mantine/core';
import styled from 'styled-components';
// import { IconChevronRight } from '@tabler/icons-react';
// import classes from './UserButton.module.css';

const StyledButton = styled(UnstyledButton)`
  display: block;
  width: 100%;
  padding: 10px;
  color: aqua;

  &:hover {
    background-color: blue;
  }
`;

export const UserButton = () => {
  return (
    <StyledButton>
      <Group>
        <Avatar
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png"
          radius="xl"
        />

        <div style={{ flex: 1 }}>
          <Text size="sm" fw={500}>
            Harriette Spoonlicker
          </Text>

          <Text c="dimmed" size="xs">
            hspoonlicker@outlook.com
          </Text>
        </div>

        {/*<IconChevronRight style={{ width: rem(14), height: rem(14) }} stroke={1.5} />*/}
        <span>Icon</span>
      </Group>
    </StyledButton>
  );
};
