import { Component, OnInit, Input } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import {Message, SelectItem} from 'primeng/components/common/api';
import { MiHttpService } from "../../servicios/mi-http.service";
import { Usuario } from "../../clases/usuario";

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css']
})

export class RegistrarUsuarioComponent implements OnInit {
  userform: FormGroup;
  
  submitted: boolean;
  
  sexos: SelectItem[];

  nivelUsuarios: SelectItem[];

  usuarios: Usuario[];
  
  @Input() loggedin: boolean;  
  
  constructor(private fb: FormBuilder, public _http:MiHttpService) {}
  
  ngOnInit() {
    console.log();
    this.userform = this.fb.group({
      'nombre': new FormControl('', Validators.required),
      'apellido': new FormControl('', Validators.required),
      'email': new FormControl('', Validators.required),
      'nombreUsuario': new FormControl('', Validators.required),
      'clave': new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)])),
      'clave2': new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)])),
      'sexo': new FormControl('', Validators.required),
      'nivelUsuario': new FormControl('', Validators.required)
    });
    
    this.sexos = [];
    this.sexos.push({label:'Seleccione su sexo', value:''});
    this.sexos.push({label:'Hombre', value:'M'});
    this.sexos.push({label:'Mujer', value:'F'});

    this.nivelUsuarios = [];
    this.nivelUsuarios.push({label:'Seleccione su tipo', value:''});
    this.nivelUsuarios.push({label:'Conductor', value:1});
    this.nivelUsuarios.push({label:'Cliente', value:2});

    this._http.GET()
    .subscribe(
      (data: Usuario[]) => {
        this.usuarios = data;
        console.log(this.usuarios);
      });
  }
  
  onSubmit() {
    this.submitted = true;
    //this.msgs = [];
    //this.msgs.push({severity:'success', summary:'Éxito', detail:'Se enviaron sus datos'});
    this.loggedin = true;

    var usuario = new Usuario();    
    delete this.userform.value.clave2;
    usuario = this.userform.value;
    //console.log(usuario);
    this._http.POST(usuario)
    .subscribe(
     (respBody) => {
       console.log(respBody);
    });
  }
  
  get diagnostic() { return JSON.stringify(this.userform.value); }
}
