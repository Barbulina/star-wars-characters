import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Character, SwapiResponseObject } from './swapi.model';

enum SwapiResource {
  people = 'people',
  films = 'films',
}

@Injectable({
  providedIn: 'root',
})
export class SwapiService {
  private characterChache: Character | undefined = undefined;
  constructor(private http: HttpClient) {}

  getCharacterList(page: number = 1): Observable<SwapiResponseObject> {
    const url = `${environment.apiUrl}${SwapiResource.people}/?page=${page}`;
    return this.http
      .get(url)
      ?.pipe(map((res: any) => this.parsePeopleResult(res)));
  }

  getCharacterById(id: number): Observable<Character> {
    const url = `${environment.apiUrl}${SwapiResource.people}/${id}`;
    return this.http.get(url).pipe(map((res: any) => this.parseCharacter(res)));
  }

  getCharacterFromCache(): Character | undefined {
    return this.characterChache;
  }

  setCharacterCache(character: Character): void {
    if (!character) return;
    this.characterChache = character;
  }

  getFilmById(id: number): Observable<any> {
    const url = `${environment.apiUrl}${SwapiResource.films}/${id}`;
    return this.http.get(url);
  }

  private parsePeopleResult(res: SwapiResponseObject): SwapiResponseObject {
    return {
      ...res,
      results: res.results.map((character) => this.parseCharacter(character)),
    };
  }

  private parseCharacter(character: Character): Character {
    const id = Number(character.url.split('/').slice(-2)[0]);
    return {
      ...character,
      id,
    };
  }
}
