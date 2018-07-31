import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Cities } from './cities';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CityService {
  private cityUrl = 'api/city';  // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }
    /** GET engss from the server */
  getCity (): Observable<Cities[]> {
    return this.http.get<Cities[]>(this.cityUrl)
    .pipe(
      tap(city => this.log(`fetched city`)),
      catchError(this.handleError('getCities', []))
    );
  }

/** GET eng by id. Return `undefined` when id not found */
getCitiesNo404<Data>(id: number): Observable<Cities> {
  const url = `${this.cityUrl}/?id=${id}`;
  return this.http.get<Cities[]>(url)
    .pipe(
      map(city => city[0]), // returns a {0|1} element array
      tap(h => {
        const outcome = h ? `fetched` : `did not find`;
        this.log(`${outcome} cities id=${id}`);
      }),
      catchError(this.handleError<Cities>(`getCities id=${id}`))
    );
}


/** GET eng by id. Will 404 if id not found */
getCities(id: number): Observable<Cities> {
  const url = `${this.cityUrl}/${id}`;
  return this.http.get<Cities>(url).pipe(
    tap(_ => this.log(`fetched cities id=${id}`)),
    catchError(this.handleError<Cities>(`getCities id=${id}`))
  );
}

/* GET engs whose name contains search term */
searchCities(term: string): Observable<Cities[]> {
  if (!term.trim()) {
    // if not search term, return empty eng array.
    return of([]);
  }
  return this.http.get<Cities[]>(`${this.cityUrl}/?title=${term}`).pipe(
    tap(_ => this.log(`found city matching "${term}"`)),
    catchError(this.handleError<Cities[]>('searchCities', []))
  );
}



//////// Save methods //////////

  /** POST: add a new eng to the server */
  addCities (cities: Cities): Observable<Cities> {
    return this.http.post<Cities>(this.cityUrl, cities, httpOptions).pipe(
      tap((cities: Cities) => this.log(`added cities w/ id=${cities.id}`)),
      catchError(this.handleError<Cities>('addCities'))
    );
  }

  /** DELETE: delete the eng from the server */
deleteCities (cities: Cities | number): Observable<Cities> {
  const id = typeof cities === 'number' ? cities : cities.id;
  const url = `${this.cityUrl}/${id}`;

  return this.http.delete<Cities>(url, httpOptions).pipe(
    tap(_ => this.log(`deleted cities id=${id}`)),
    catchError(this.handleError<Cities>('deleteCities'))
  );
}



/** PUT: update the eng on the server */
updateCities (cities: Cities): Observable<any> {
  return this.http.put(this.cityUrl, cities, httpOptions)
  .pipe(
    tap(_ => this.log(`updated cities id=${cities.id}`)),
    catchError(this.handleError<any>('updateCities'))
  );
}


/*
  Handle Http operation that failed.
  Let the app continue.
  @param operation - name of the operation that failed
  @param result - optional value to return as the observable result
 */

private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

  /** Log a EngService message with the MessageService */
  private log(message: string) {
    this.messageService.add('CityService: ' + message);
  }

}
