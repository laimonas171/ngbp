import {Component} from '@angular/core';
import {DevFeature} from "@ngbp/util/dev-feature";

@Component({
  selector: 'ngbp-example-feature-two',
  templateUrl: './example-feature-two.component.html',
})
export class ExampleFeatureTwoComponent {
  featureFlag = DevFeature.ExampleFeature;
}
