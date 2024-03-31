import { MovieListResponse } from '@pages/movie/MoviePage.tsx';

export const movieListResponse: MovieListResponse = {
  totCnt: 3,
  movieList: [
    {
      movieCd: '20231111',
      movieNm: '땅에 쓰는 시',
      directors: ['ysKim', 'jyLee'],
      companys: ['kt', 'samsung'],
    },
    {
      movieCd: '20232222',
      movieNm: '터미네이터',
      directors: ['steve jobs'],
      companys: ['apple'],
    },
    {
      movieCd: '20233333',
      movieNm: '웡카',
      directors: ['jensen huang'],
      companys: ['nvidia'],
    },
  ],
};

export const todos = ['숙제하기', '넷플릭스보기', '청소하기'];
