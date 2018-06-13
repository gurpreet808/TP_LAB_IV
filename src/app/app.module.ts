import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavBarComponent } from './componentes/nav-bar/nav-bar.component';

import {MenubarModule} from 'primeng/menubar';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/primeng';
import {PanelModule} from 'primeng/panel';
import {InputTextModule} from 'primeng/inputtext';

import { ListadoViajesComponent } from './componentes/listado-viajes/listado-viajes.component';
import { ListadoRemiserosComponent } from './componentes/listado-remiseros/listado-remiseros.component';
import { Error404Component } from './componentes/error404/error404.component';
import { AuthService } from './servicios/auth.service';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { MiHttpService } from './servicios/mi-http.service';
import { AltaVehiculoComponent } from './componentes/alta-vehiculo/alta-vehiculo.component';
import { RegistrarUsuarioComponent } from './componentes/registrar-usuario/registrar-usuario.component';

const appRoutes = [
  { path:"", component: InicioComponent },
  { path:"listadoremiseros", component: ListadoRemiserosComponent, canActivate:[AuthService]},
  { path:"listadoviajes", component: ListadoViajesComponent },
  { path:"**", component: Error404Component }
]

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    InicioComponent,
    Error404Component,
    ListadoViajesComponent,
    ListadoRemiserosComponent,
    AltaVehiculoComponent,
    RegistrarUsuarioComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    MenubarModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    PanelModule,
    DropdownModule,
    InputTextModule
  ],
  providers: [AuthService, MiHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
