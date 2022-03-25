import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import {ExampleOneComponent} from "./containers/example-one/example-one.component";
import {DevFeature, DevFeatureGuard} from "@ngbp/util/dev-feature";
import {ExampleTwoComponent} from "./containers/example-two/example-two.component";

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: NxWelcomeComponent,
  },
  {
    path: 'example-one',
    component: ExampleOneComponent,
    canActivate: [DevFeatureGuard],
    data: {
      devFeature: DevFeature.Example1
    }
  },
  {
    path: 'example-two',
    component: ExampleTwoComponent,
    canActivate: [DevFeatureGuard],
    data: {
      devFeature: DevFeature.Example2
    }
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
