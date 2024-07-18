import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SigninComponent } from './components/signin/signin.component';
import { ErrorViewComponent } from './components/error-view/error-view.component';
import { PlayerSheetComponent } from './components/player-sheet/player-sheet.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'player', component: PlayerSheetComponent},
  {path: 'errorView', component: ErrorViewComponent},
  {path: '**', redirectTo: '/errorView'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
