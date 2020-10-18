import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../../service/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {

  constructor(
    private heroesService: HeroesService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  buscarHeroes(texto: string){
    this.router.navigate(['busqueda', texto]);
  }

}
