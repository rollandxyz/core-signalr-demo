import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeSignalrComponent } from './welcome-signalr.component';

describe('WelcomeSignalrComponent', () => {
  let component: WelcomeSignalrComponent;
  let fixture: ComponentFixture<WelcomeSignalrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomeSignalrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeSignalrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
