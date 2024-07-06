import { Component } from '@angular/core';
import { Player } from './player';
import { PlayerApiService } from './player-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-test';
  player?: Player;
  constructor(private playerApiService: PlayerApiService) {
    const player_id = 1;
    this.playerApiService.searchById(player_id).subscribe(data => {
      this.player = data;
    })
  }
}
