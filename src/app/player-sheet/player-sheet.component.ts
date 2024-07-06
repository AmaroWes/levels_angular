import { Component } from '@angular/core';
import { Player } from '../player';
import { PlayerApiService } from '../player-api.service';

@Component({
  selector: 'app-player-sheet',
  templateUrl: './player-sheet.component.html',
  styleUrls: ['./player-sheet.component.css']
})
export class PlayerSheetComponent {
  player?: Player;
  constructor(private playerApiService: PlayerApiService) {
    const player_id = 1;
    this.playerApiService.searchById(player_id).subscribe(data => {
      this.player = data;
    })
  }
}
