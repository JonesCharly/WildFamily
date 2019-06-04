import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutFinalComponent } from './about-final.component';

describe('AboutFinalComponent', () => {
  let component: AboutFinalComponent;
  let fixture: ComponentFixture<AboutFinalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutFinalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutFinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
