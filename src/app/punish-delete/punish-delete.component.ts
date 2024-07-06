import { Component } from '@angular/core';
import { Punish } from '../punish';
import { PunishApiService } from '../punish-api.service';

@Component({
  selector: 'app-punish-delete',
  templateUrl: './punish-delete.component.html',
  styleUrls: ['./punish-delete.component.css']
})
export class PunishDeleteComponent {
  listPunish: Punish[] = [];
  constructor(private punishApiService: PunishApiService) {
    this.punishApiService.search().subscribe(
      (punish) => {
        this.listPunish = punish;
      }
    )
  }

  deletePunish(i: any) {
    this.punishApiService.delete(i).subscribe(
      data => {
        alert(`Punish ${data.id} deletada com sucesso`);
      } 
    )
  }
}
