import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResourcesRoutingModule } from './resources-routing.module';
import { ResourcesFilmsPageComponent } from './pages/resources-films-page.component';


@NgModule({
  declarations: [
    ResourcesFilmsPageComponent
  ],
  imports: [
    CommonModule,
    ResourcesRoutingModule
  ]
})
export class ResourcesModule { }
