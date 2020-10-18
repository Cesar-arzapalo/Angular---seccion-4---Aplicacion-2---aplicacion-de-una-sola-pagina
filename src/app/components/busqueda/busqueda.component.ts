import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../service/heroes.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
})
export class BusquedaComponent implements OnInit {
  heroesBuscados: Heroe[];
  idBusqueda: string;
  constructor(
    private activatedRoute: ActivatedRoute,
    private heroeService: HeroesService) {
    this.activatedRoute.params.subscribe(params => {
      this.heroesBuscados = this.heroeService.buscarHeroes(params['idBusqueda']);
      this.idBusqueda = params['idBusqueda'];
    });
  }

  ngOnInit(): void {
  }

}
