import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDatasService implements InMemoryDbService {
  createDb() {
    const city = [
        { id: 1, title: 'Bangalore'},
        { id: 2, title: 'Delhi'},
        { id: 3, title: 'Mumbai'},
        { id: 4, title: 'Pune'}
     ];
    return {city};
  }

}
