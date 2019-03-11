import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from '@shared/global-components/error404/error404.component';
import { RouteData } from '@app-models/route-data';
import { HomeComponent } from '@app-modules/demo/home/home.component';

const routes: Routes = [{
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'demo',
        pathMatch: 'full'
      },
      {
        path: 'demo',
        component: HomeComponent,
        pathMatch: 'full',
        data: <RouteData>{title: 'Demo page'}
      },
      {
        path: '**',
        component: Error404Component,
        data: <RouteData>{title: 'Page Not Found'}
      }]
    }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
