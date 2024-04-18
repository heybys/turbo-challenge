import { http } from 'msw/core/http';
import { HttpHandler, HttpResponse, passthrough } from 'msw';
import {
  mockProducts,
  movieListResponse,
  todos,
} from '@/__tests__/mocks/data.ts';

const httpHandlers: HttpHandler[] = [
  // 영화 목록
  http.get('http://localhost:8080/movies', async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return HttpResponse.json(movieListResponse);
  }),

  // 상품 목록
  http.get('http://localhost:8080/products', async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return HttpResponse.json(mockProducts);
  }),

  // 할일 목록
  http.get('http://localhost:8080/todos', async () => {
    return HttpResponse.json(todos);
  }),

  // 할일 추가
  http.post('http://localhost:8080/todos', async ({ request }) => {
    todos.push(await request.text());
    return new HttpResponse(null, {
      status: 201,
    });
  }),

  // 할일 목록
  http.get('http://localhost:8080/test', async () => {
    return HttpResponse.json(mockProducts);
  }),

  http.get('http://localhost:8080/**/*', () => {
    return passthrough();
  }),
];

export default httpHandlers;
