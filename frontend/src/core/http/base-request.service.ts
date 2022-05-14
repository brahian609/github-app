import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BaseRequestService {

  constructor(private http: HttpClient) {}

  public get(url: string): Observable<any> {
    return this.http.get<any>(url, { headers: BaseRequestService.getHttpOptions() })
      .pipe(
        catchError(BaseRequestService.handleError)
      );
  }

  public delete(url: string): Observable<any> {
    return this.http.delete<any>(url, { headers: BaseRequestService.getHttpOptions() })
      .pipe(
        catchError(BaseRequestService.handleError)
      );
  }

  public post(url: string, data: any): Observable<any> {
    return this.http.post<any>(url, data, { headers: BaseRequestService.getHttpOptions() })
      .pipe(
        catchError(BaseRequestService.handleError)
      );
  }

  public put(url: string, data: any): Observable<any> {
    return this.http.put<any>(url, data, { headers: BaseRequestService.getHttpOptions() })
      .pipe(
        catchError(BaseRequestService.handleError)
      );
  }

  private static getHttpOptions(): HttpHeaders {
    let httpOptions = new HttpHeaders();
    httpOptions = httpOptions.append('Content-Type', 'application/json');
    httpOptions = httpOptions.append('Accept', 'application/json');
    return httpOptions;
  }

  private static handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error.type}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }

}
