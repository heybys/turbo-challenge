import { http } from 'msw/core/http';
import { HttpResponse, HttpHandler } from 'msw';
import { movieListResponse, todos } from '@mocks/mockData.ts';

const httpHandlers: HttpHandler[] = [
  // 영화 목록
  http.get('api/movies', async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return HttpResponse.json(movieListResponse);
  }),

  // 할일 목록
  http.get('api/todos', async () => {
    return HttpResponse.json(todos);
  }),

  // 할일 추가
  http.post('api/todos', async ({ request }) => {
    todos.push(await request.text());
    return new HttpResponse(null, {
      status: 201,
    });
  }),
];

export default httpHandlers;
