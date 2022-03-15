import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, Subscription } from 'rxjs';
import { Character, Film } from 'src/app/services/swapi/swapi.model';
import { SwapiService } from 'src/app/services/swapi/swapi.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss'],
})
export class CharacterDetailComponent implements OnInit, OnDestroy {
  character: Character | undefined = undefined;
  subscriptions: Subscription = new Subscription();
  films: Film[] = [];
  isFilmsLoading: boolean = false;
  constructor(
    private swaService: SwapiService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getCharacter();
  }

  goBack(): void {
    this.location.back();
  }

  getCharacter(): void {
    const characterInCache = this.swaService.getCharacterFromCache();
    if (characterInCache && characterInCache.id === this.getIdFromParams()) {
      this.character = this.swaService.getCharacterFromCache();
      const characterFilms = this.character?.films;
      this.getFilmsById(characterFilms);
    } else {
      this.getCharacterFromAPI();
    }
  }

  private getFilmsById(films: string[] | undefined): void {
    if (!films || films.length === 0) return;
    const filmsSub: any = [];
    films.forEach((film) => {
      filmsSub.push(
        this.swaService.getFilmById(Number(film.split('/').slice(-2)[0]))
      );
    });
    this.subscriptions.add(
      combineLatest(filmsSub).subscribe((films: any) => (this.films = films))
    );
  }

  private getCharacterFromAPI(): void {
    this.isFilmsLoading = true;
    this.subscriptions.add(
      this.swaService
        .getCharacterById(this.getIdFromParams())
        .subscribe((character: Character) => {
          this.swaService.setCharacterCache(character);
          this.character = character;
          const characterFilms = this.character?.films;
          this.getFilmsById(characterFilms);
          this.isFilmsLoading = false;
        })
    );
  }

  private getIdFromParams(): number {
    return Number(this.route.snapshot.params['id']);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
