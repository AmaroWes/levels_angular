import { Component } from '@angular/core';
import { Punish } from '../punish';
import { PunishApiService } from '../punish-api.service';

@Component({
  selector: 'app-punish-create',
  templateUrl: './punish-create.component.html',
  styleUrls: ['./punish-create.component.css']
})
export class PunishCreateComponent {
  punish = new Punish();
  constructor(private punishApiService: PunishApiService) {}
  createPunish() {
    this.punishApiService.create(this.punish).subscribe(
      (pun) => {
        alert(`Punishment ${pun.id} cadastrado com sucesso`);
        this.punish = new Punish();
      }
    )
  }
}
