import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FaceitService {

  constructor(private http: HttpClient) {}

  getFaceitStats(username: string): Observable<any> {
    const url = 'https://open.faceit.com/data/v4/players/21e0cf3e-1ef2-48fd-bcf4-b57d015259a7/stats/csgo';

    console.log(url);
    return this.http.get(url);
  }
}

