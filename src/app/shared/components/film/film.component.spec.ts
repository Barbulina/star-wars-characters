import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularMaterialModule } from '../../modules/angular-material/angular-material.module';
import { FilmComponent } from './film.component';

describe('FilmComponent', () => {
  let component: FilmComponent;
  let fixture: ComponentFixture<FilmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FilmComponent],
      imports: [AngularMaterialModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
