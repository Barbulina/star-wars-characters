import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-character-property',
  templateUrl: './character-property.component.html',
  styleUrls: ['./character-property.component.scss'],
})
export class CharacterPropertyComponent {
  @Input() property:
    | { label: string | undefined; value: string | undefined }
    | undefined;
}
