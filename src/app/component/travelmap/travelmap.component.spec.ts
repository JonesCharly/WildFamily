import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelmapComponent } from './travelmap.component';

describe('TravelmapComponent', () => {
  let component: TravelmapComponent;
  let fixture: ComponentFixture<TravelmapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelmapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
