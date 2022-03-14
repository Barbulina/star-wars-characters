import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of, throwError } from 'rxjs';
import { dataMock } from 'src/app/services/swapi/dataMock';
import { SwapiService } from 'src/app/services/swapi/swapi.service';
import { AngularMaterialModule } from '../../modules/angular-material/angular-material.module';
import { PaginationComponent } from '../pagination/pagination.component';
import { CharacterListComponent } from './character-list.component';

describe('CharacterListComponent', () => {
  let component: CharacterListComponent;
  let fixture: ComponentFixture<CharacterListComponent>;
  let swapiService: SwapiService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CharacterListComponent, PaginationComponent],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        AngularMaterialModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    swapiService = TestBed.inject(SwapiService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should call getCharacters', () => {
      spyOn(component, 'getCharacters');
      component.ngOnInit();
      expect(component.getCharacters).toHaveBeenCalledWith(
        component.currentPage
      );
    });
  });

  describe('getCharacters', () => {
    it('Should get characters lists', () => {
      spyOn(swapiService, 'getCharacterList').and.returnValue(of(dataMock));
      component.getCharacters(1);
      expect(component.characters).toEqual(dataMock.results);
    });

    it('Should call getcharacters and return error', () => {
      spyOn(console, 'error');
      spyOn(swapiService, 'getCharacterList').and.returnValue(
        throwError(() => {
          error: 'error';
        })
      );
      component.getCharacters(1);
      expect(console.error).toHaveBeenCalled();
    });
  });

  describe('navigateToPage', () => {
    it('Should call getCharacter with the page', () => {
      spyOn(component, 'getCharacters');
      component.navigateToPage('url/?page=2');
      expect(component.getCharacters).toHaveBeenCalledWith(2);
    });
  });

  describe('ngOnDestroy', () => {
    it('should unsubscribe from subscriptions', () => {
      spyOn(component.subscriptions, 'unsubscribe');
      component.ngOnDestroy();
      expect(component.subscriptions.unsubscribe).toHaveBeenCalled();
    });
  });
});
