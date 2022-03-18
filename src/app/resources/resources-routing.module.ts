import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResourcesFilmsPageComponent } from './pages/resources-films-page.component';

const routes: Routes = [
  {
    path: '',
    component: ResourcesFilmsPageComponent,
  },
  {
    path: 'films',
    component: ResourcesFilmsPageComponent,
  },
  {
    path: '**',
    redirectTo: 'films',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResourcesRoutingModule {}
