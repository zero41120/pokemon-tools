import { MoveSelectorMainComponent } from './move-selector-main/move-selector-main.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'move-selector', component: MoveSelectorMainComponent},
  { path: '', redirectTo: '/move-selector', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
