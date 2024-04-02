import MovieDetailPage from '@pages/movie/[movieCd]/MovieDetailPage.tsx';
import { RouteObject } from 'react-router-dom';

const movieRoutes: RouteObject[] = [
  {
    path: ':movieCd',
    index: true,
    element: <MovieDetailPage />,
  },
];

export default movieRoutes;
