import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainDisplayerComponent } from './main-displayer.component';

describe('MainDisplayerComponent', () => {
  let component: MainDisplayerComponent;
  let fixture: ComponentFixture<MainDisplayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainDisplayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainDisplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
