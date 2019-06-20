import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FaceitService {

  constructor(private httpClient: HttpClient) { }

  getFaceitStats(username: string): Observable<Object> {
    return this.httpClient.get('http://jsonplaceholder.typicode.com/users');
  }
}
