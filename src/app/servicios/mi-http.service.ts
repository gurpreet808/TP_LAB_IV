import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from '../clases/usuario';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
    //'Authorization': 'my-auth-token'
  })
};

@Injectable()
export class MiHttpService {

  constructor(public _miHttp:HttpClient) { }

  urlServidor = 'http://localhost/apiTP';
  
  GET() {
    return this._miHttp.get(this.urlServidor+"/usuario/");
  }

  POST (usuario: Usuario): Observable<Usuario> {
    return this._miHttp.post<Usuario>(this.urlServidor+"/usuario/", usuario, httpOptions);
  }
}
