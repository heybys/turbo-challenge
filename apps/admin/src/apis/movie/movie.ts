export interface Movie {
  movieCd: string;
  movieNm: string;
  directors: string[];
  companys: string[];
}

export interface MovieListResponse {
  totCnt: number;
  movieList: Movie[];
}
