import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {DialogFullscreenComponent} from './dialogs/dialogs-fullscreen/dialogs-fullscreen.component';
import {DialogWindowedComponent} from './dialogs/dialogs-windowed/dialogs-windowed.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'FullSize', component: DialogFullscreenComponent },
  { path: 'windowed', component: DialogWindowedComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
