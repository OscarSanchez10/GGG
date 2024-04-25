import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InicioComponent } from './inicio.component'; // Actualiza las importaciones

describe('InicioComponent', () => { // Actualiza la descripción
  let component: InicioComponent;
  let fixture: ComponentFixture<InicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InicioComponent] // Actualiza la declaración del componente
    })
    .compileComponents();

    fixture = TestBed.createComponent(InicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
