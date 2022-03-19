import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResourcesRoutingModule } from './resources-routing.module';
import { ResourcesMainPageComponent } from './pages/main/resources-main-page.component';
import { ResourcesFilmsPageComponent } from './pages/resources-films/resources-films-page.component';
import { ResourcesMenuComponent } from './components/resources-menu/resources-menu.component';


@NgModule({
  declarations: [
    ResourcesMainPageComponent,
    ResourcesFilmsPageComponent,
    ResourcesMenuComponent
  ],
  imports: [
    CommonModule,
    ResourcesRoutingModule
  ]
})
export class ResourcesModule { }
