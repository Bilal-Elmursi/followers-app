import { BadInputError } from '../Common/bad-input-error';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable()
export class GenericService {
  constructor(private url: string, private http: HttpClient) { }

  getAll() {
    return this.http.get(this.url).pipe(
      tap(response => response),
      catchError(this.handleError))
  }

  create(resource) {
    return this.http.post(this.url,
      JSON.parse(JSON.stringify(resource)), {
        headers: new HttpHeaders({
          "Content-type": "application/json; charset=UTF-8"
        })
      }).pipe(
        tap(
          (response => response),
          catchError(this.handleError)
        )
      )
  }

  update(resource) {
    return this.http.patch(this.url + '/' + resource.id, JSON.stringify({
      isRead: true
    })).pipe(
      tap(response => response),
      catchError(this.handleError))
  }

  delete(id) {
    debugger;
    return this.http.delete(this.url + '/' +id).pipe(
      tap(response => response),
      catchError(this.handleError))
  }

  private handleError(error: Response) {
    debugger;
    if (error.status === 400)
      return throwError(new BadInputError(error));

    if (error.status === 404)
      return throwError(new NotFoundError(error));

    return throwError(new AppError(error));
  }
}