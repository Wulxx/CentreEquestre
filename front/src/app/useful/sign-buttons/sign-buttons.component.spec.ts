import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignButtonsComponent } from './sign-buttons.component';

describe('SignButtonsComponent', () => {
  let component: SignButtonsComponent;
  let fixture: ComponentFixture<SignButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignButtonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
