import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleFeatureOneComponent } from './components/example-feature-one/example-feature-one.component';
import { ExampleFeatureTwoComponent } from './components/example-feature-two/example-feature-two.component';
import { DevFeatureModule } from '@ngbp/util/dev-feature';
import { ExampleFeatureFlagsComponent } from './example-feature-flags.component';
import { ExampleFeatureFlagsRoutingModule } from './example-feature-flags-routing.module';

@NgModule({
  imports: [CommonModule, DevFeatureModule, ExampleFeatureFlagsRoutingModule],
  declarations: [
    ExampleFeatureOneComponent,
    ExampleFeatureTwoComponent,
    ExampleFeatureFlagsComponent,
  ],
})
export class ExampleFeatureFlagsModule {}
