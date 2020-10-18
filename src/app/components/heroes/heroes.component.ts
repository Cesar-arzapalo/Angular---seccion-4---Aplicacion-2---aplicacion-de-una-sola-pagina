import { Component, OnInit } from '@angular/core';
import {HeroesService, Heroe} from '../../service/heroes.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [
  ]
})
export class HeroesComponent implements OnInit {
  heroes: Heroe[] = [];
  constructor(
    private heroesService: HeroesService,
    private router: Router
  ) {
    console.log('constructo');
   }

  ngOnInit(): void {
    this.heroes = this.heroesService.getHeroes();
  }
  verHeroe(idx: number){
    this.router.navigate(['heroe', idx]);
  }

}
