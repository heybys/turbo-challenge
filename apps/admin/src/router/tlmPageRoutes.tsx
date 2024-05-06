import { RouteObject } from 'react-router-dom';

const tlmPageRoutes: RouteObject[] = [
  {
    path: '/tlm/settings/holidays',
    element: <div>This is holidays</div>,
  },
  {
    path: '/tlm/settings/work-policy',
    element: <div>This is work policy</div>,
  },
  {
    path: '/tlm/settings/work-type',
    element: <div>This is work type</div>,
  },
  {
    path: '/tlm/settings/work-space',
    element: <div>This is work space</div>,
  },
];
export default tlmPageRoutes;
