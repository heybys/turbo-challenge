import { http } from 'msw/core/http';
import { HttpHandler, HttpResponse, passthrough } from 'msw';
import {
  mockProducts,
  movieListResponse,
  todos,
} from '@/__tests__/mocks/data.ts';
import { Product } from '@apis/product/model/product.ts';

const DELAY = 500;

const httpHandlers: HttpHandler[] = [
  // 영화 목록
  http.get('http://localhost:8080/movies', async () => {
    await new Promise((resolve) => setTimeout(resolve, DELAY));
    return HttpResponse.json(movieListResponse);
  }),

  // 상품 목록
  http.get('http://localhost:8080/products', async ({ request }) => {
    await new Promise((resolve) => setTimeout(resolve, DELAY));
    const url = new URL(request.url);

    const name = url.searchParams.get('name');
    const cost = url.searchParams.get('cost');

    const filtered = mockProducts
      .filter((p) => (name ? p.name === name : true))
      .filter((p) => (cost ? p.cost > Number(cost) : true));

    return HttpResponse.json(filtered);
  }),

  // 상품
  http.get('http://localhost:8080/products/:productId', async ({ params }) => {
    await new Promise((resolve) => setTimeout(resolve, DELAY));
    const { productId } = params;
    return HttpResponse.json(
      mockProducts.filter((p) => p.id === Number(productId)).at(0),
    );
  }),

  // 상품 추가
  http.post('http://localhost:8080/products', async ({ request }) => {
    await new Promise((resolve) => setTimeout(resolve, DELAY));
    const map = mockProducts.map((p) => p.id) as number[];
    const maxId = Math.max(...map);

    const { item } = (await request.json()) as { item: Product };
    item.id = maxId + 1;
    mockProducts.push(item);

    return HttpResponse.json(item);
  }),

  // 상품 수정
  http.put('http://localhost:8080/products', async ({ request }) => {
    const { item } = (await request.json()) as { item: Product };
    mockProducts
      .filter((p) => p.id === item.id)
      .map((p) => {
        p.cost = item.cost;
        p.name = item.name;
        p.category = item.category;
      });

    return HttpResponse.json(item);
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

  // 상품 목록
  http.get('http://localhost:8080/test', async () => {
    return HttpResponse.json(mockProducts);
  }),

  http.all('http://localhost:8080/*', () => {
    return passthrough();
  }),
];

export default httpHandlers;
