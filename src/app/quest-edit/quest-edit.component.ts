import { Component } from '@angular/core';
import { Quest } from '../quest';
import { QuestApiService } from '../quest-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quest-edit',
  templateUrl: './quest-edit.component.html',
  styleUrls: ['./quest-edit.component.css']
})
export class QuestEditComponent {
  questId?: any;
  quest?: any;
  loading: boolean = true;
  constructor(private route: ActivatedRoute, private questApiService: QuestApiService){}

  ngOnInit(){
    this.questId = this.route.snapshot.paramMap.get('id');
    this.questApiService.searchById(this.questId).subscribe(res => {
      this.quest = res;
      this.loading = false;
    });
  }

  saveQuest(){
    var data = {
      id: this.quest.id,
      name: this.quest.name,
      exp: this.quest.exp,
      status: this.quest.status,
      amout: this.quest.amout,
      type: this.quest.type,
      description: this.quest.description,
      done: this.quest.done,
      clock: this.quest.clock,
      playerId: 1
    }
    this.questApiService.update(this.questId, data).subscribe(
      res => {console.log(res)}
    )
  }
}
