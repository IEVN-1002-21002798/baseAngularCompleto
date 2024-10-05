import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-resistencia',
  templateUrl: './resistencia.component.html',
  styleUrls: ['./resistencia.component.css']
})
export class ResistenciaSelecComponent {

  colores = [
    { nombre: 'Negro', valor: 0 },
    { nombre: 'Marrón', valor: 1 },
    { nombre: 'Rojo', valor: 2 },
    { nombre: 'Naranja', valor: 3 },
    { nombre: 'Amarillo', valor: 4 },
    { nombre: 'Verde', valor: 5 },
    { nombre: 'Azul', valor: 6 },
    { nombre: 'Violeta', valor: 7 },
    { nombre: 'Gris', valor: 8 },
    { nombre: 'Blanco', valor: 9 }
  ];

  resistenciaForm: FormGroup;

  resistencias: any[] = [];

  constructor(private fb: FormBuilder) {
    this.resistenciaForm = this.fb.group({
      color1: ['', Validators.required],
      color2: ['', Validators.required],
      color3: ['', Validators.required],
      tolerancia: ['', Validators.required]  // Validamos que la tolerancia sea obligatoria
    });
  }
  calcularResistencia() {
    const { color1, color2, color3, tolerancia } = this.resistenciaForm.value;

    const valorBase = (color1  + color2) * Math.pow(10, color3); 
    const valorMaximo = valorBase * (1 + tolerancia / 100);
    const valorMinimo = valorBase * (1 - tolerancia / 100);

    const nombreColor1 = this.colores[color1].nombre;
    const nombreColor2 = this.colores[color2].nombre;
    const nombreColor3 = this.colores[color3].nombre;

    const resistencia = {
      color1: nombreColor1,
      color2: nombreColor2,
      color3: nombreColor3,
      tolerancia,
      valor: valorBase,
      valorMaximo,
      valorMinimo
    };

    this.resistencias.push(resistencia);
  }
}