import 'jest-styled-components';
import { render, RenderOptions } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import React, { PropsWithChildren } from 'react';
import { defaultTheme } from '@/__tests__/mocks/theme.ts';

const Wrapper = ({ children }: PropsWithChildren) => (
  <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
);

const renderWithStyledComponent = (
  ui: React.ReactNode,
  options?: RenderOptions,
) => render(ui, { wrapper: Wrapper, ...options });

export * from '@testing-library/react';

export { renderWithStyledComponent as render };
