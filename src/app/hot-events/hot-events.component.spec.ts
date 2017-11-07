import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotEventsComponent } from './hot-events.component';

describe('HotEventsComponent', () => {
  let component: HotEventsComponent;
  let fixture: ComponentFixture<HotEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
