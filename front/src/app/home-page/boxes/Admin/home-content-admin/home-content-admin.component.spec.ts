import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeContentAdminComponent } from './home-content-admin.component';

describe('HomeContentAdminComponent', () => {
  let component: HomeContentAdminComponent;
  let fixture: ComponentFixture<HomeContentAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeContentAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeContentAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
