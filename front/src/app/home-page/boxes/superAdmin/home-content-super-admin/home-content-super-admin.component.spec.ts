import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeContentSuperAdminComponent } from './home-content-super-admin.component';

describe('HomeContentSuperAdminComponent', () => {
  let component: HomeContentSuperAdminComponent;
  let fixture: ComponentFixture<HomeContentSuperAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeContentSuperAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeContentSuperAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
