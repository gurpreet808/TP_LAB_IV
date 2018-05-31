import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from './app.component';
import { NavBarComponent } from './componentes/nav-bar/nav-bar.component';

import {MenubarModule} from 'primeng/menubar';
import {ButtonModule} from 'primeng/button';


import { ListadoViajesComponent } from './componentes/listado-viajes/listado-viajes.component';
import { ListadoRemiserosComponent } from './componentes/listado-remiseros/listado-remiseros.component';
import { Error404Component } from './componentes/error404/error404.component';
import { AuthService } from './servicios/auth.service';
import { InicioComponent } from './componentes/inicio/inicio.component';

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
    ListadoRemiserosComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    MenubarModule,
    ButtonModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
