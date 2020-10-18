import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Heroe } from '../../service/heroes.service';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {
  @Input() heroe: Heroe;
  @Input() i: number;

  @Output() heroeSeleccionado: EventEmitter<number>;
  constructor() {
    this.heroeSeleccionado = new EventEmitter();
   }

  ngOnInit(): void {
  }

  verHeroe(){
    this.heroeSeleccionado.emit(this.i);
  }

}
