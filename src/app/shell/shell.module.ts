import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShellRoutingModule } from './shell-routing.module';
import { ShellMainPageComponent } from './pages/shell-main-page.component';


@NgModule({
  declarations: [
    ShellMainPageComponent
  ],
  imports: [
    CommonModule,
    ShellRoutingModule
  ]
})
export class ShellModule { }
