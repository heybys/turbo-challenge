import 'jest-styled-components';
import { render, RenderOptions } from '@testing-library/react';
import { defaultTheme } from '../styles';
import { ThemeProvider } from 'styled-components';
import React, { PropsWithChildren } from 'react';

const Wrapper = ({ children }: PropsWithChildren) => (
  <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
);

const renderWithStyledComponent = (
  ui: React.ReactNode,
  options?: RenderOptions,
) => render(ui, { wrapper: Wrapper, ...options });

export * from '@testing-library/react';

export { renderWithStyledComponent as render };
