import { Component } from '@angular/core';
import { Punish } from '../punish';
import { PunishApiService } from '../punish-api.service';

@Component({
  selector: 'app-punish-sheet',
  templateUrl: './punish-sheet.component.html',
  styleUrls: ['./punish-sheet.component.css']
})
export class PunishSheetComponent {
  listPunish: Punish[] = [];
  constructor(private punishApiService: PunishApiService) {
    this.punishApiService.search().subscribe(
      (punish) => {this.listPunish = punish;}
    )
  }
}
