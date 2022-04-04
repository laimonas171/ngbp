import { TestBed } from '@angular/core/testing';

import { CookieService } from './cookie.service';

const COOKIE_NAME = "test-cookie"

describe('CookiesService', () => {
  let service: CookieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CookieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe("Get cookie", () => {
    it("Should get correct cookie", () => {
      const cookieValue = "awesome-cookie";

      Object.defineProperty(window.document, "cookie", {
        writable: true,
        value: `${COOKIE_NAME}=${cookieValue}; anotherCookie=notSoImportant`
      })
      expect(service.get(COOKIE_NAME)).toEqual(cookieValue);
    });

    it("should decode URI values", () => {
      const cookieValue = "awesome-cookie%7camazing-cookie%7cbest-cookie";
      const expectedResults = "awesome-cookie|amazing-cookie|best-cookie";


      Object.defineProperty(window.document, "cookie", {
        writable: true,
        value: `${COOKIE_NAME}=${cookieValue}; anotherCookie=notSoImportant`
      })
      expect(service.get(COOKIE_NAME)).toEqual(expectedResults);
    })
  })

  describe("Set cookie", () => {
    it("Should set passed cookie with provided value", () => {
      const cookieValue = 'feature-test'
      service.set(COOKIE_NAME, cookieValue);
      expect(getCookieValueOnly(document.cookie)).toEqual(`${COOKIE_NAME}=${cookieValue}`)
    });

    it("should encode URI cookie value", () => {
      const cookieValue = 'feature-test|page-test'
      const expectedValue = 'feature-test%7Cpage-test'
      service.set(COOKIE_NAME, cookieValue);
      expect(getCookieValueOnly(document.cookie)).toEqual(`${COOKIE_NAME}=${expectedValue}`)
    });
  })
});

const getCookieValueOnly = (cookie: string): string => cookie.split(';')[0]
