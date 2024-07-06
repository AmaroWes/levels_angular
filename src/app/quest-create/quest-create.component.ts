import { Component } from '@angular/core';
import { Quest } from '../quest';
import { QuestApiService } from '../quest-api.service';

@Component({
  selector: 'app-quest-create',
  templateUrl: './quest-create.component.html',
  styleUrls: ['./quest-create.component.css']
})
export class QuestCreateComponent {
  quest = new Quest();
  constructor(private questApiService: QuestApiService) {}
  createQuest() {
    this.questApiService.create(this.quest).subscribe(
      (que) => {
        alert(`Quest ${que.id} cadastrado com sucesso`);
        this.quest = new Quest();
      }
    )
  }
}
