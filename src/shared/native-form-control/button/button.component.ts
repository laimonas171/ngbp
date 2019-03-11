import { Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { ButtonTheme } from '@shared/native-form-control/button/button-theme';

@Component({
  selector: 'button[ngbp-button], a[ngbp-button]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() type: string;
  @Input() isAnimated: boolean;
  @Input() theme: ButtonTheme;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    if (this.elRef.nativeElement.tagName === 'BUTTON' && !this.type) {
      this.renderer.setAttribute(this.elRef.nativeElement, 'type', 'button');
    }
  }

}
