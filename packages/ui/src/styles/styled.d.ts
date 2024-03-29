import 'styled-components';
import theme from '@styles/theme';

type Theme = typeof theme;

export declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
