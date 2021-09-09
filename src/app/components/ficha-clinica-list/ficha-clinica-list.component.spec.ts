import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaClinicaListComponent } from './ficha-clinica-list.component';

describe('FichaClinicaListComponent', () => {
  let component: FichaClinicaListComponent;
  let fixture: ComponentFixture<FichaClinicaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FichaClinicaListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FichaClinicaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
