import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-ejemplo',
  templateUrl: './ejemplo.component.html',
  styleUrl: './ejemplo.component.css'
})
export class EjemploComponent implements OnInit{
formulario!: FormGroup;
resultado!: number;

constructor(){}
ngOnInit(): void {
  this.formulario=new FormGroup({
    numero1: new FormControl('', Validators.required),
    numero2: new FormControl('', Validators.required),
  })
}
sumarNumeros():void{
  const n1=this.formulario.get('numero1')?.value;
  const n2=this.formulario.get('numero2')?.value;
  this.resultado=n1+n2;
}
}
