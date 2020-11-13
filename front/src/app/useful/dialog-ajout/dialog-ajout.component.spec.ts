import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAjoutComponent } from './dialog-ajout.component';

describe('DialogAjoutComponent', () => {
  let component: DialogAjoutComponent;
  let fixture: ComponentFixture<DialogAjoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAjoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAjoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
