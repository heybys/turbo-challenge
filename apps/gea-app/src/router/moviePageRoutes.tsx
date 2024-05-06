import MovieDetail from '@pages/movies/[movieCd]/MovieDetail.tsx';
import { RouteObject } from 'react-router-dom';

const moviePageRoutes: RouteObject[] = [
  {
    path: ':movieCd',
    index: true,
    element: <MovieDetail />,
  },
];

export default moviePageRoutes;
