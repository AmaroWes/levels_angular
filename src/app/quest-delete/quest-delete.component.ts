import { Component } from '@angular/core';
import { Quest } from '../quest';
import { QuestApiService } from '../quest-api.service';

@Component({
  selector: 'app-quest-delete',
  templateUrl: './quest-delete.component.html',
  styleUrls: ['./quest-delete.component.css']
})
export class QuestDeleteComponent {
  listQuests: Quest[] = [];
  constructor(private questApiService: QuestApiService) {
    this.questApiService.search().subscribe(
      (quest) => {
        this.listQuests = quest;
      }
    )
  }

  deleteQuest(i: any) {
    this.questApiService.delete(i).subscribe(
      data => {
        alert(`Quest ${data.id} deletada com sucesso`);
      } 
    )
  }
}
