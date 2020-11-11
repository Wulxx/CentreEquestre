import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstFormeComponent } from './first-forme.component';

describe('FirstFormeComponent', () => {
  let component: FirstFormeComponent;
  let fixture: ComponentFixture<FirstFormeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstFormeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstFormeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
