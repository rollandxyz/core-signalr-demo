import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkingSignalrComponent } from './drinking-signalr.component';

describe('DrinkingSignalrComponent', () => {
  let component: DrinkingSignalrComponent;
  let fixture: ComponentFixture<DrinkingSignalrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrinkingSignalrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinkingSignalrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
