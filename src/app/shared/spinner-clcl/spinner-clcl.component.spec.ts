import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinnerClclComponent } from './spinner-clcl.component';

describe('SpinnerClclComponent', () => {
  let component: SpinnerClclComponent;
  let fixture: ComponentFixture<SpinnerClclComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpinnerClclComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpinnerClclComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
