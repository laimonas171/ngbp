import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevFeatureService } from './services/dev-feature.service';
import { AngularDevelopmentCookiesComponent } from './containers/angular-development-cookies/angular-development-cookies.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: AngularDevelopmentCookiesComponent },
    ]),
  ],
  providers: [DevFeatureService],
  declarations: [AngularDevelopmentCookiesComponent],
  exports: [AngularDevelopmentCookiesComponent],
})
export class DevFeatureModule {}
