import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShellMainPageComponent } from './pages/shell-main-page.component';

const routes: Routes = [
  {
    path: '',
    component: ShellMainPageComponent,
    children: [
      {
        path: '',
        redirectTo: 'resource',
        pathMatch: 'full'
      },
      {
        path: 'resource',
        loadChildren: () => import('../resources/resources.module').then((module) => module.ResourcesModule)
      },
      {
        path: '**',
        redirectTo: 'resource',
        pathMatch: 'full',
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShellRoutingModule { }
