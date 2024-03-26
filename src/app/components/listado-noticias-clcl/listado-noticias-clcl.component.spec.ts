import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoNoticiasClclComponent } from './listado-noticias-clcl.component';

describe('ListadoNoticiasClclComponent', () => {
  let component: ListadoNoticiasClclComponent;
  let fixture: ComponentFixture<ListadoNoticiasClclComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoNoticiasClclComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoNoticiasClclComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
