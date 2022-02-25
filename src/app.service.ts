import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(params: { id: number }): string {
    return `Hello World! ${params.id}`;
  }

  getHelloQuery(query: { id: number }): string {
    return `Hello World123! ${query.id}`;
  }
}

@Injectable()
export class AppServiceQuery {
  getHello(query: { id: number }): string {
    return `Hello World123! ${query.id}`;
  }
}
