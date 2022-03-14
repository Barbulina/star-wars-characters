import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from '../../modules/angular-material/angular-material.module';
import { CharacterPropertyComponent } from './character-property.component';

describe('CharacterPropertyComponent', () => {
  let component: CharacterPropertyComponent;
  let fixture: ComponentFixture<CharacterPropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CharacterPropertyComponent],
      imports: [AngularMaterialModule, BrowserAnimationsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
