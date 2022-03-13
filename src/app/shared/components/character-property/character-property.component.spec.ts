import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterPropertyComponent } from './character-property.component';

describe('CharacterPropertyComponent', () => {
  let component: CharacterPropertyComponent;
  let fixture: ComponentFixture<CharacterPropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterPropertyComponent ]
    })
    .compileComponents();
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
