import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DevFeatureService} from "@ngbp/util/dev-feature";

@Component({
  selector: 'ngbp-angular-development-cookies',
  templateUrl: './angular-development-cookies.component.html',
  styleUrls: ['./angular-development-cookies.component.scss']
})
export class AngularDevelopmentCookiesComponent implements OnInit {
  setCookie: string = '';

  constructor(private activatedRoute: ActivatedRoute, private devFeatureService: DevFeatureService) { }

  ngOnInit(): void {
    this.setCookie = this.activatedRoute.snapshot.queryParams['features'] ?? '';
    this.devFeatureService.setCookieValue(this.setCookie);
  }

}
