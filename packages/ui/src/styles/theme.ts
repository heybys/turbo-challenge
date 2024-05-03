// import * as scale from './design-token/scale';
// import * as semantic from './design-token/semantic';
import * as foundation from './foundation';

export type Theme = typeof defaultTheme;

export const defaultTheme = {
  color: {
    ...foundation.color,
  },
  shadow: {
    ...foundation.shadow,
  },
  typography: {
    ...foundation.typography,
  },
  breakpoint: {
    ...foundation.layout.breakpoint,
  },
};

// export const lightTheme: Theme = {
//   colors: {
//     ...scale.color,
//     ...semantic.color,
//   },
//   radius: {
//     ...scale.radius,
//     ...semantic.radius,
//   },
//   typography: {
//     ...scale.typography,
//     ...semantic.typography,
//   },
//   breakpoint: {
//     ...scale.breakpoint,
//     ...semantic.breakpoint,
//   },
// };
