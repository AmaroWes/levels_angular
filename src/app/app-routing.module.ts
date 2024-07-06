import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayerSheetComponent } from './player-sheet/player-sheet.component';
import { QuestSheetComponent } from './quest-sheet/quest-sheet.component';
import { QuestCreateComponent } from './quest-create/quest-create.component';
import { QuestDeleteComponent } from './quest-delete/quest-delete.component';
import { QuestEditComponent } from './quest-edit/quest-edit.component';
import { PunishSheetComponent } from './punish-sheet/punish-sheet.component';
import { PunishCreateComponent } from './punish-create/punish-create.component';
import { PunishDeleteComponent } from './punish-delete/punish-delete.component';
import { PunishEditComponent } from './punish-edit/punish-edit.component';

const routes: Routes = [
  {path: 'player-sheet', component: PlayerSheetComponent},
  {path: 'quests', component: QuestSheetComponent},
  {path: 'quest-create', component: QuestCreateComponent},
  {path: 'quest-delete', component: QuestDeleteComponent},
  {path: 'quest-edit/:id', component: QuestEditComponent},
  {path: 'punish', component: PunishSheetComponent},
  {path: 'punish-create', component: PunishCreateComponent},
  {path: 'punish-delete', component: PunishDeleteComponent},
  {path: 'punish-edit/:id', component: PunishEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
