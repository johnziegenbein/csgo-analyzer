import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FaceitService {

  constructor(private http: HttpClient) {}


  getFaceitId(username: string): Observable<any> {
    const url = 'https://open.faceit.com/data/v4/players?nickname=' + username;
    console.log(url);
    return this.http.get(url);
  }

  getFaceitStats(userId: string): Observable<any> {
    const url = 'https://open.faceit.com/data/v4/players/' + userId + '/stats/csgo';
    console.log(url);
    return this.http.get(url);
  }

  getMapHistory(userId: string, amountOfMatches: number): Observable<any> {
    const url = 'https://open.faceit.com/data/v4/players/' + userId + '/history?game=csgo&from=946684800&offset=0&limit=' + amountOfMatches.toString();
    console.log(url);
    return this.http.get(url);
  }

  getMatchResults(matchId: string): Observable<any> {
    const url = 'https://open.faceit.com/data/v4/matches/' + matchId + '/stats';
    console.log(url);
    return this.http.get(url);
  }

}

