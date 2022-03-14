import { Component, Input } from '@angular/core';
import { Film } from 'src/app/services/swapi/swapi.model';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss'],
})
export class FilmComponent {
  @Input() film: Film | undefined = undefined;
}
