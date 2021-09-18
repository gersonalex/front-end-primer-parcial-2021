import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogBuscarEmpleadoComponent } from './dialog-buscar-empleado.component';

describe('DialogBuscarEmpleadoComponent', () => {
  let component: DialogBuscarEmpleadoComponent;
  let fixture: ComponentFixture<DialogBuscarEmpleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogBuscarEmpleadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogBuscarEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
