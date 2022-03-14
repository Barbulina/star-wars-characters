import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { fakeAsync, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { dataMock, dataMockWithoutParse } from './dataMock';
import { SwapiResponseObject } from './swapi.model';
import { SwapiService } from './swapi.service';

describe('SwapiService', () => {
  let http: HttpClient;
  let service: SwapiService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SwapiService],
    });
    service = TestBed.inject(SwapiService);
    http = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get people list with page 2', () => {
    const mockPage = 2;
    const expectedUrl = `${environment.apiUrl}people/?page=${mockPage}`;
    spyOn(http, 'get');
    service.getCharacterList(mockPage);
    expect(http.get).toHaveBeenCalledWith(expectedUrl);
  });

  it('should get people list with page by default', () => {
    const mockPage = undefined;
    const expectedUrl = `${environment.apiUrl}people/?page=1`;
    spyOn(http, 'get');
    service.getCharacterList(mockPage);
    expect(http.get).toHaveBeenCalledWith(expectedUrl);
  });

  it('should get people list with page by default and parse data', fakeAsync(() => {
    const mockPage = undefined;
    const expectedUrl = `${environment.apiUrl}people/?page=1`;
    spyOn(http, 'get').and.returnValue(of(dataMockWithoutParse));

    service.getCharacterList(mockPage).subscribe((res: SwapiResponseObject) => {
      expect(res.results[0].id).toEqual(dataMock.results[0].id);
      expect(http.get).toHaveBeenCalledWith(expectedUrl);
    });
  }));

  describe('setCharacterCache', () => {
    it('should set character cache', () => {
      const mockCharacter = dataMock.results[0];

      service.setCharacterCache(mockCharacter);

      expect(service.getCharacterFromCache()).toEqual(mockCharacter);
    });
  });
});
