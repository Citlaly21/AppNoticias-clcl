import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioClclComponent } from './formulario-clcl.component';

describe('FormularioJacComponent', () => {
  let component: FormularioClclComponent;
  let fixture: ComponentFixture<FormularioClclComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioClclComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioClclComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
