import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import {
  Character,
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

  constructor(private swapiService: SwapiService) {}

  ngOnInit(): void {
    this.getCharacters(this.currentPage);
  }

  getCharacters(page: number): void {
    this.isLoading = true;
    this.subscriptions.add(
      this.swapiService.getPeopleList(page).subscribe({
        next: (data: SwapiResponseObject) => {
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
    // TODO go to the detail page
    console.log('char selected', character);
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
