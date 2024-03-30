import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { GameCellComponent } from './game-cell/game-cell.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GameCellComponent, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ang-app';
  player = 'X';
  board = [
    [
      { value: '', id: 11 },
      { value: '', id: 12 },
      { value: '', id: 13 },
    ],
    [
      { value: '', id: 21 },
      { value: '', id: 22 },
      { value: '', id: 23 },
    ],
    [
      { value: '', id: 31 },
      { value: '', id: 32 },
      { value: '', id: 33 },
    ],
  ];
  fun(r: number, c: number) {
    if (!this.board[r][c].value) {
      this.board[r][c].value = this.player;
      this.player = this.player === 'X' ? 'O' : 'X';
    }
  }
}
