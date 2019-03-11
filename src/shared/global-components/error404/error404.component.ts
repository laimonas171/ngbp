import { Component, OnInit } from '@angular/core';
import { PageComponent } from '../../../app/models/route-data';

@Component({
  selector: 'ngbp-error404',
  templateUrl: './error404.component.html',
  styleUrls: ['./error404.component.scss']
})
export class Error404Component implements OnInit, PageComponent {
  title = 'Title Override';
  constructor() { }

  ngOnInit() {
  }

}
