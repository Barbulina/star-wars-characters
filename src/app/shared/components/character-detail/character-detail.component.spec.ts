import { Location } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { dataMock } from 'src/app/services/swapi/dataMock';
import { SwapiService } from 'src/app/services/swapi/swapi.service';
import { CharacterDetailComponent } from './character-detail.component';

describe('CharacterDetailComponent', () => {
  let component: CharacterDetailComponent;
  let fixture: ComponentFixture<CharacterDetailComponent>;
  let location: Location;
  let swaService: SwapiService;
  let route: ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CharacterDetailComponent],
      imports: [RouterTestingModule, HttpClientTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    location = TestBed.inject(Location);
    swaService = TestBed.inject(SwapiService);
    route = TestBed.inject(ActivatedRoute);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('Should call getCharacter function', () => {
      spyOn(component, 'getCharacter');
      component.ngOnInit();
      expect(component.getCharacter).toHaveBeenCalled();
    });
  });

  describe('goBack', () => {
    it('Should call location back function', () => {
      spyOn(location, 'back');
      component.goBack();
      expect(location.back).toHaveBeenCalled();
    });
  });

  describe('getCharacter', () => {
    it('Should get character from API', fakeAsync(() => {
      spyOn(swaService, 'getCharacterById').and.returnValue(
        of(dataMock.results[0])
      );

      component.getCharacter();
      tick();
      expect(component.character).toEqual(dataMock.results[0]);
    }));

    it('Should get charactet from cache', () => {
      route.snapshot.params['id'] = 1;
      swaService.setCharacterCache(dataMock.results[0]);
      component.getCharacter();

      expect(component.character).toEqual(dataMock.results[0]);
    });
  });
});
