import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResourcesMainPageComponent } from './pages/main/resources-main-page.component';
import { ResourcesFilmsPageComponent } from './pages/resources-films/resources-films-page.component';

const routes: Routes = [
  {
    path: '',
    component: ResourcesMainPageComponent,
    children: [
      {
        path: 'films',
        component: ResourcesFilmsPageComponent,
      },
      {
        path: '**',
        redirectTo: '',
        pathMatch: 'full',
      },
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResourcesRoutingModule {}
