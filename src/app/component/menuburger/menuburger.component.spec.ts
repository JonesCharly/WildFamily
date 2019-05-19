import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuburgerComponent } from './menuburger.component';

describe('MenuburgerComponent', () => {
  let component: MenuburgerComponent;
  let fixture: ComponentFixture<MenuburgerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuburgerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuburgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
