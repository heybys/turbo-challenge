export interface Movie {
  movieCd: string;
  movieNm: string;
  directors: string[];
  companies: string[];
}

export interface MovieListResponse {
  totCnt: number;
  movieList: Movie[];
}
