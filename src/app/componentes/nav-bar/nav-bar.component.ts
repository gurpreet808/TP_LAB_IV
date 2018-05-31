import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private router: Router) { }
  
  items: MenuItem[];
  
  ngOnInit() {
    this.items = [
      {
        label: 'Inicio',
        icon: 'fa-home', 
        command: e => {
          this.router.navigateByUrl("/");
        }
      },
      {
        label: 'Listado Viajes',
        icon: 'fa-home',
        routerLink:"/listadoviajes"       
      },
      {
        label: 'Listado Remiseros',
        icon: 'fa-home', 
        routerLink:"/listadoremiseros"
      }
    ];
  }
}
