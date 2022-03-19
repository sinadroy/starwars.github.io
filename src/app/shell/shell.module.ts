import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShellRoutingModule } from './shell-routing.module';
import { ShellMainPageComponent } from './pages/shell-main/shell-main-page.component';
import { ShellHeaderComponent } from './components/shell-header/shell-header.component';
import { ShellMenuComponent } from './components/shell-menu/shell-menu.component';


@NgModule({
  declarations: [
    ShellMainPageComponent,
    ShellHeaderComponent,
    ShellMenuComponent
  ],
  imports: [
    CommonModule,
    ShellRoutingModule,
  ]
})
export class ShellModule { }
