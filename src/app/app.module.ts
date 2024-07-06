import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PlayerSheetComponent } from './player-sheet/player-sheet.component';
import { QuestSheetComponent } from './quest-sheet/quest-sheet.component';
import { PunishSheetComponent } from './punish-sheet/punish-sheet.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { QuestCreateComponent } from './quest-create/quest-create.component';
import { QuestDeleteComponent } from './quest-delete/quest-delete.component';
import { QuestEditComponent } from './quest-edit/quest-edit.component';
import { PunishCreateComponent } from './punish-create/punish-create.component';
import { PunishDeleteComponent } from './punish-delete/punish-delete.component';
import { PunishEditComponent } from './punish-edit/punish-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    PlayerSheetComponent,
    QuestSheetComponent,
    PunishSheetComponent,
    QuestCreateComponent,
    QuestDeleteComponent,
    QuestEditComponent,
    PunishCreateComponent,
    PunishDeleteComponent,
    PunishEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
