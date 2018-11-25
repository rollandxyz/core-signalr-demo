import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EchoSignalrComponent } from './echo-signalr.component';

describe('EchoSignalrComponent', () => {
  let component: EchoSignalrComponent;
  let fixture: ComponentFixture<EchoSignalrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EchoSignalrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EchoSignalrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
