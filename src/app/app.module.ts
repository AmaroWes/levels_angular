import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { ErrorViewComponent } from './components/error-view/error-view.component';
import { SigninComponent } from './components/signin/signin.component';
import { PlayerSheetComponent } from './components/player-sheet/player-sheet.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ErrorViewComponent,
    SigninComponent,
    PlayerSheetComponent
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
