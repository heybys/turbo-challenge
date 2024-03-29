import * as scale from '@styles/design-token/scale';
import * as semantic from '@styles/design-token/semantic';

const theme = {
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

export default theme;