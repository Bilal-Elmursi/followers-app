import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GenericService } from './generic.service';

@Injectable()
export class PostService extends GenericService {

  constructor(http: HttpClient) {
    super('https://jsonplaceholder.typicode.com/posts', http);
   }
}

