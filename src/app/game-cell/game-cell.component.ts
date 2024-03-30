import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'game-cell',
  standalone: true,
  imports: [],
  templateUrl: './game-cell.component.html',
  styleUrl: './game-cell.component.css',
})
export class GameCellComponent {
  @Input()
  c: string = '-';
}
