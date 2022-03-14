import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularMaterialModule } from '../../modules/angular-material/angular-material.module';
import { PaginationComponent } from './pagination.component';

describe('PaginationComponent', () => {
  let component: PaginationComponent;
  let fixture: ComponentFixture<PaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaginationComponent],
      imports: [AngularMaterialModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('ngOnInit should call calcPages', () => {
    spyOn(component, 'calcPages');

    component.ngOnInit();

    expect(component.calcPages).toHaveBeenCalled();
  });

  it('calcPages should create property array pages', () => {
    component.count = 100;
    component.pageSize = 10;

    component.calcPages();

    expect(component.pages).toBeTruthy();
    expect(component.pages.length).toBe(10);
  });

  it('onSelectPage should call emit with page selected', () => {
    spyOn(component.selectPage, 'emit');

    component.onSelectPage(3);

    expect(component.selectPage.emit).toHaveBeenCalledWith(3);
  });
});
