import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private SERVER_URL = 'http://localhost:8080/';

  constructor(private httpClient: HttpClient) {
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // ClientModel-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  public sendGetRequest(url: string): Observable<any> {
    return this.httpClient.get(this.SERVER_URL + url).pipe(catchError(this.handleError));
  }

  sendPostRequest(url: string, object: any): Observable<any> {
    return this.httpClient.post(this.SERVER_URL + url, object).pipe(catchError(this.handleError));
  }

  sendGetRequestById(url: string, id: number): Observable<any> {
    return this.httpClient.get(this.SERVER_URL + url + id).pipe(catchError(this.handleError));
  }

  sendPutRequest(url: string, objeto: any): Observable<any> {
    return this.httpClient.put(this.SERVER_URL + url + objeto.id, objeto).pipe(catchError(this.handleError));
  }

  sendRequestPDF(url: string, id: string): Observable<any> {
    return this.httpClient.get(this.SERVER_URL + url + 'pdf/' + id, {responseType: 'blob'}).pipe(catchError(this.handleError));
  }
}
