import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeContentMonitorComponent } from './home-content-monitor.component';

describe('HomeContentMonitorComponent', () => {
  let component: HomeContentMonitorComponent;
  let fixture: ComponentFixture<HomeContentMonitorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeContentMonitorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeContentMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
