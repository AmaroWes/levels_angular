import { Component } from '@angular/core';
import { Quest } from '../quest';
import { QuestApiService } from '../quest-api.service';

@Component({
  selector: 'app-quest-sheet',
  templateUrl: './quest-sheet.component.html',
  styleUrls: ['./quest-sheet.component.css']
})
export class QuestSheetComponent {
  listQuests: Quest[] = [];
  constructor(private questApiService: QuestApiService) {
    this.questApiService.search().subscribe(
      (quest) => {this.listQuests = quest;}
    )
  }
}
