import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import {
  Character,
  RESULTS_PER_PAGE,
  SwapiResponseObject,
} from 'src/app/services/swapi/swapi.model';
import { SwapiService } from 'src/app/services/swapi/swapi.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss'],
})
export class CharacterListComponent implements OnInit, OnDestroy {
  currentPage: number = 1;
  count: number = 0;
  previous: string | undefined = undefined;
  next: string | undefined = undefined;
  characters: Character[] = [];
  isLoading: boolean = false;
  subscriptions = new Subscription();
  pageSize: number = RESULTS_PER_PAGE;

  columnsDef = [
    {
      columnDef: 'name',
      header: 'Name',
      cell: (element: Character) => `${element.name}`,
    },
    {
      columnDef: 'gender',
      header: 'Gender',
      cell: (element: Character) => `${element.gender}`,
    },
    {
      columnDef: 'height',
      header: 'Height (cm)',
      cell: (element: Character) => `${element.height}`,
    },
    {
      columnDef: 'mass',
      header: 'Mass (Kg)',
      cell: (element: Character) => `${element.mass}`,
    },
  ];

  constructor(private swapiService: SwapiService, private router: Router) {}

  ngOnInit(): void {
    this.getCharacters(this.currentPage);
  }

  getCharacters(page: number): void {
    this.isLoading = true;
    this.subscriptions.add(
      this.swapiService.getCharacterList(page).subscribe({
        next: (data: SwapiResponseObject) => {
          this.currentPage = page;
          this.count = data.count;
          this.next = data.next;
          this.previous = data.previous;
          this.characters = data.results;
        },
        error: (e) => {
          // TODO handle error
          console.error(e);
        },
        complete: () => (this.isLoading = false),
      })
    );
  }

  selectCharacter(character: Character): void {
    this.swapiService.setCharacterCache(character);
    this.router.navigate(['/character', character.id]);
  }

  navigateToPage(url: string | undefined): void {
    const page = this.getPageFromUrl(url);
    this.currentPage = page;
    this.getCharacters(page);
  }

  private getPageFromUrl(url: string | undefined): number {
    if (!url) return this.currentPage;
    const page = url.split('=')[1];
    return Number(page);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
