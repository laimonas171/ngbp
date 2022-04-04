import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevFeatureService } from './services/dev-feature.service';
import { AngularDevelopmentCookiesComponent } from './containers/angular-development-cookies/angular-development-cookies.component';
import { RouterModule } from '@angular/router';
import { HasDevFeatureEnabledDirective } from './directives/has-dev-feature-enabled.directive';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'set',
        component: AngularDevelopmentCookiesComponent,
      },
    ]),
  ],
  providers: [DevFeatureService],
  declarations: [
    AngularDevelopmentCookiesComponent,
    HasDevFeatureEnabledDirective,
  ],
  exports: [AngularDevelopmentCookiesComponent, HasDevFeatureEnabledDirective],
})
export class DevFeatureModule {}
