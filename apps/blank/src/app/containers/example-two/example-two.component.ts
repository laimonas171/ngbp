import {Component} from '@angular/core';
import {DevFeature} from "@ngbp/util/dev-feature";

@Component({
  selector: 'ngbp-example-two',
  templateUrl: './example-two.component.html',
  styleUrls: ['./example-two.component.scss']
})
export class ExampleTwoComponent {
  featureFlag = DevFeature.ExampleFeature;
}
