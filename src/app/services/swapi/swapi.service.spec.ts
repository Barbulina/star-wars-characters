import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment';
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
    service.getPeopleList(mockPage);
    expect(http.get).toHaveBeenCalledWith(expectedUrl);
  });

  it('should get people list with page by default', () => {
    const mockPage = undefined;
    const expectedUrl = `${environment.apiUrl}people/?page=1`;
    spyOn(http, 'get');
    service.getPeopleList(mockPage);
    expect(http.get).toHaveBeenCalledWith(expectedUrl);
  });
});
