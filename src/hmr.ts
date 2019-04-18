import { NgModuleRef, ApplicationRef } from '@angular/core';
import { createNewHosts } from '@angularclass/hmr';
// no-any is turned off, because any module can be referenced by HMR
// tslint:disable-next-line:no-any
export const hmrBootstrap = (module: any, bootstrap: () => Promise<NgModuleRef<any>>) => {
  // tslint:disable-next-line:no-any
  let ngModule: NgModuleRef<any>;
  module.hot.accept();
  bootstrap().then(mod => ngModule = mod);
  module.hot.dispose(() => {
    const appRef: ApplicationRef = ngModule.injector.get(ApplicationRef);
    const elements = appRef.components.map(c => c.location.nativeElement);
    const makeVisible = createNewHosts(elements);
    ngModule.destroy();
    makeVisible();
  });
};
