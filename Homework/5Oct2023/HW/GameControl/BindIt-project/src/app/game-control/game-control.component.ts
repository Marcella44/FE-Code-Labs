import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})

export class GameControlComponent {
  currentGameCount = 0;
  @Output() gameCount = new EventEmitter<number>();
  count;


  startGame() {
    this.count = setInterval(() => {
      this.gameCount.emit(this.currentGameCount);
      this.currentGameCount++;
    }, 1000)
  }

  pauseGame() {
    clearInterval(this.count);
  }
}
