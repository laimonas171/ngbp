import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { DevFeature, DevFeatureService } from '@ngbp/util/dev-feature';

@Directive({
  selector: '[hasDevFeatureEnabled]',
})
export class HasDevFeatureEnabledDirective {
  private feature?: DevFeature;
  private isHidden = true;

  @Input() set hasDevFeatureEnabled(feature: DevFeature) {
    this.feature = feature;
    const res = this.devFeatureService.isEnabled(this.feature);
    this.updateView(res);
  }

  constructor(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any -- this is structural directive and can be used on any element
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private devFeatureService: DevFeatureService
  ) {}

  updateView(isVisible: boolean): void {
    if (isVisible && this.isHidden) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.isHidden = false;
      this.viewContainer.clear();
    }
  }
}
