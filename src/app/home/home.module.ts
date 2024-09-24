import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { PrincipalComponent } from './principal/principal.component';
import { FinalComponent } from './final/final.component';



@NgModule({
  declarations: [
    MenuComponent,
    PrincipalComponent,
    FinalComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    MenuComponent,
    PrincipalComponent,
    FinalComponent
  ]
})
export class HomeModule { }
