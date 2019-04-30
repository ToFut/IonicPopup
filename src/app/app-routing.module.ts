import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {DialogFullscreenComponent} from './dialog/dialog-fullscreen/dialog-fullscreen.component';
import {DialogWindowedComponent} from './dialog/dialog-windowed/dialog-windowed.component';

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
