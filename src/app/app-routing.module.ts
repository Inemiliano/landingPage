import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './home/principal/principal.component';
import { MenuComponent } from './home/menu/menu.component';
import { FinalComponent } from './home/final/final.component';

const routes: Routes = [
  {path:'home',component:PrincipalComponent},
  {path:'menu',component:MenuComponent},
  {path:'final',component:FinalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
