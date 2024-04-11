import * as scale from './design-token/scale';
import * as semantic from './design-token/semantic';

export const defaultTheme = {
  colors: {
    ...scale.color,
    ...semantic.color,
  },
  radius: {
    ...scale.radius,
    ...semantic.radius,
  },
  typography: {
    ...scale.typography,
    ...semantic.typography,
  },
  breakpoint: {
    ...scale.breakpoint,
    ...semantic.breakpoint,
  },
};

export default defaultTheme;
