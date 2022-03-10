import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from 'src/app/services/swapi/swapi.model';
import { SwapiService } from 'src/app/services/swapi/swapi.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss'],
})
export class CharacterDetailComponent implements OnInit {
  character: Character | undefined = undefined;
  constructor(
    private swaService: SwapiService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getCharacter();
  }

  goBack() {
    this.location.back();
  }

  getCharacter(): void {
    const characterInCache = this.swaService.getCharacterFromCache();
    if (characterInCache && characterInCache.id === this.getIdFromParams()) {
      this.character = this.swaService.getCharacterFromCache();
    } else {
      this.getCharacterFromAPI();
    }
  }

  private getCharacterFromAPI() {
    this.swaService
      .getCharacterById(this.getIdFromParams())
      .subscribe((character: Character) => {
        this.swaService.setCharacterCache(character);
        this.character = character;
      });
  }

  private getIdFromParams(): number {
    return Number(this.route.snapshot.params['id']);
  }
}
