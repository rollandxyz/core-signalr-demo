import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValueSignalrComponent } from './value-signalr.component';

describe('ValueSignalrComponent', () => {
  let component: ValueSignalrComponent;
  let fixture: ComponentFixture<ValueSignalrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValueSignalrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValueSignalrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
