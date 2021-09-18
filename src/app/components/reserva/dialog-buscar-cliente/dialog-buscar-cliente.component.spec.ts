import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogBuscarClienteComponent } from './dialog-buscar-cliente.component';

describe('DialogBuscarClienteComponent', () => {
  let component: DialogBuscarClienteComponent;
  let fixture: ComponentFixture<DialogBuscarClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogBuscarClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogBuscarClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
