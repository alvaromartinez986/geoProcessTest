import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Laboratory } from '../../interfaces/laboratory.interface';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-laboratory',
  templateUrl: './laboratory.component.html',
  styleUrls: ['./laboratory.component.css']
})
export class LaboratoryComponent implements OnInit {

   laboratory:Laboratory  = {
    actividad: "",
    ano_de_fundacion: "",
    area_conocimiento: "",
    capacidad_maxima_estudiantes: 0,
    cargo: "",
    categoria_docente: "",
    celular: "",
    cod_escuela: 0,
    cod_georef:0 ,
    cod_lab: 0,
    direccion: "",
    email_universidad: "",
    escuela_o_departamento: "",
    espacio: "",
    hora_semana: "",
    identificacion: "",
    nombre_de_laboratorio: "",
    nombre_responsable: "",
    resolucion_de_creacion: "",
    telefono_lab: "",
    telefono_responsable: ""
  }


  constructor(private _firebaseService:FirebaseService,
              private router:Router) { }

  ngOnInit() {
  }

  save(){

    this._firebaseService.newLaboratory(this.laboratory)
          .subscribe(data=>{
            this.router.navigate(['/laboratories']);
          },
          error=>console.log(error));
  }

}
