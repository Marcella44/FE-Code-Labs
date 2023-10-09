import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  gameLogged(gameLogCount) {
    if (gameLogCount % 2 === 0) {
      this.evenNumbers.push(gameLogCount);
    } else {
      this.oddNumbers.push(gameLogCount);
    }
  }
}
