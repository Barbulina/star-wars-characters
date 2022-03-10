import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of, throwError } from 'rxjs';
import { dataMock } from 'src/app/services/swapi/dataMock';
import { SwapiService } from 'src/app/services/swapi/swapi.service';
import { CharacterListComponent } from './character-list.component';

describe('CharacterListComponent', () => {
  let component: CharacterListComponent;
  let fixture: ComponentFixture<CharacterListComponent>;
  let swapiService: SwapiService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CharacterListComponent],
      imports: [HttpClientTestingModule],
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
      spyOn(swapiService, 'getPeopleList').and.returnValue(of(dataMock));
      component.getCharacters(1);
      expect(component.characters).toEqual(dataMock.results);
    });

    it('Should call getcharacters and return error', () => {
      spyOn(console, 'error');
      spyOn(swapiService, 'getPeopleList').and.returnValue(
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

  describe('selectCharacter', () => {
    it('Should navigate to character detail', () => {
      //
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
