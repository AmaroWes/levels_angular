import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PunishApiService } from '../punish-api.service';

@Component({
  selector: 'app-punish-edit',
  templateUrl: './punish-edit.component.html',
  styleUrls: ['./punish-edit.component.css']
})
export class PunishEditComponent {
  punishId?: any;
  punish?: any;
  loading: boolean = true;
  constructor(private route: ActivatedRoute, private punishApiService: PunishApiService){}

  ngOnInit(){
    this.punishId = this.route.snapshot.paramMap.get('id');
    this.punishApiService.searchById(this.punishId).subscribe(res => {
      this.punish = res;
      this.loading = false;
    });
  }

  savePunish(){
    var data = {
      id: this.punish.id,
      name: this.punish.name,
      description: this.punish.description,
      playerId: 1
    }
    this.punishApiService.update(this.punishId, data).subscribe(
      res => {console.log(res)}
    )
  }
}
