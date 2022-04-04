import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExampleFeatureFlagsComponent } from './example-feature-flags.component';
import { ExampleFeatureOneComponent } from './components/example-feature-one/example-feature-one.component';
import { DevFeature, DevFeatureGuard } from '@ngbp/util/dev-feature';
import { ExampleFeatureTwoComponent } from './components/example-feature-two/example-feature-two.component';

const routes: Routes = [
  {
    path: '',
    component: ExampleFeatureFlagsComponent,
    children: [
      {
        path: 'example-one',
        component: ExampleFeatureOneComponent,
        canActivate: [DevFeatureGuard],
        data: {
          devFeature: DevFeature.Example1,
        },
      },
      {
        path: 'example-two',
        component: ExampleFeatureTwoComponent,
        canActivate: [DevFeatureGuard],
        data: {
          devFeature: DevFeature.Example2,
        },
      },
    ],
  },
  {
    path: 'angular-development-cookies',
    loadChildren: () =>
      import('@ngbp/util/dev-feature').then((m) => m.DevFeatureModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExampleFeatureFlagsRoutingModule {}
