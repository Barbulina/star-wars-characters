import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class SwapiService {
  constructor(private http: HttpClient) {}

  getPeopleList(page: number = 1): Observable<any> {
    const url = `${environment.apiUrl}people/?page=${page}`;
    return this.http.get(url);
  }
}
