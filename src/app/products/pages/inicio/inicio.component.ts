import { Component } from '@angular/core';

interface Game {
  name: string;
  imageUrl: string;
  rating: number; // Número de estrellas seleccionadas
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  imageUrl: string = 'assets/img/fondo.png';

  games: Game[] = [
    { name: 'Apex Legends', imageUrl: 'assets/img/apex.png', rating: 3 },
    { name: 'League of leyends', imageUrl: 'assets/img/lol.png', rating: 3 },
    { name: 'Persona 5', imageUrl: 'assets/img/persona 5.jpg', rating: 3 },
    { name: 'Monster Hunter World', imageUrl: 'assets/img/monster.png', rating: 3 },
    { name: 'Overwatch', imageUrl: 'assets/img/overwatch.png', rating: 3 },

  ];

  setRating(game: Game, rating: number): void {
    game.rating = rating;
  }
}
