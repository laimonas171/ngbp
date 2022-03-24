import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class CookieService {
  constructor(@Inject(DOCUMENT) private document: Document) {}

  get(name: string): string | null {
    const cookieRegExp = CookieService.getCookieRegExp(name);
    const cookieResult = cookieRegExp.exec(this.document.cookie);
    console.log(cookieResult);

    if (cookieResult) {
      return CookieService.decode(cookieResult[1]);
    }

    return null;
  }

  private static getCookieRegExp(name: string): RegExp {
    const escapedName: string = name.replace(
      /([\[\]{}()|=;+?,.*^$])/gi,
      '\\$1'
    );

    return new RegExp(
      '(?:^' + escapedName + '|;\\s*' + escapedName + ')=(.*?)(?:;|$)',
      'g'
    );
  }

  private static decode(val: string): string {
    try {
      return decodeURIComponent(val);
    } catch {
      return val;
    }
  }
}
