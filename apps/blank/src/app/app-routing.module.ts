import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: NxWelcomeComponent,
  },
  {
    path: 'angular-development-cookies',
    loadChildren: () =>
      import('@ngbp/util/dev-feature').then((m) => m.DevFeatureModule),
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
