import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarClclComponent } from './navbar-clcl.component';

describe('NavbarJacComponent', () => {
  let component: NavbarClclComponent;
  let fixture: ComponentFixture<NavbarClclComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarClclComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarClclComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
