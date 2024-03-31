import styled from 'styled-components';
import { PropsWithChildren } from 'react';
import styles from './header.module.css';

interface StyledHeaderProps {
  size?: 'SM' | 'MD' | 'LG';
}

const StyledHeader = styled.header<StyledHeaderProps>`
  ${({ size }) => (size === 'SM' ? 'font-size: 32px;' : 'font-size: 64px;')}
  color: white;
`;

interface HeaderProps extends StyledHeaderProps, PropsWithChildren {}

export function Header({ size = 'SM', children }: HeaderProps) {
  return (
    <>
      <StyledHeader className={styles.header} size={size}>
        {children}
      </StyledHeader>
    </>
  );
}
