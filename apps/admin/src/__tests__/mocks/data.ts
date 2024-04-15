import { Product } from '@apis/product/product.ts';
import { MovieListResponse } from '@apis/movie/movie.ts';

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

export const mockProducts: Product[] = [
  {
    id: 1,
    name: 'Product1',
    cost: 10000,
    category: '뷰티',
  },
  {
    id: 2,
    name: 'Product2',
    cost: 20000,
    category: '가전',
  },
  {
    id: 3,
    name: 'Product3',
    cost: 30000,
    category: '생필품',
  },
];

export const todos = ['숙제하기', '넷플릭스보기', '청소하기'];
