# util-dev-feature

A mechanism to show/hide features for CI development.

## How It Works

Each development feature is assigned an encoded flag (stored in `DevFeature` enum).
`AngularDevelopmentCookiesComponent` is used as a page to store enabled feature flags as browser cookies.
For routing, `CanActivate: [DevFeatureGuard]` is used to check if features flag is stored in browser cookie.
If so, it passes through, if not - redirects to appropriate page (root page by default).
`HasDevFeatureEnabledDirective` is used control whether a child component should be rendered based on enabled feature flags.

## Content

- `types.ts` - File used to store encoded feature flags and other library constants.
- `CookieService` - Service for reading and writing cookies.
- `DevFeatureService` - Service for setting enabled features and checking if a feature is enabled.
- `AngularDevelopmentCookiesComponent` - Component for setting enabled features.
- `DevFeatureGuard` - CanActivate guard used for checking if feature can be navigated to and redirects if not.
- `HasDevFeatureEnabledDirective` - Structural directive that controls if a feature should be rendered.

## Setup

- Add `dev-feature` library to your project.
- Create a route to `AngularDevelopmentCookiesComponent` like so:
```
{
  path: 'angular-development-cookies', 
  loadChildren: () => import('@ngbp/util/dev-feature').then((m) => m.DevFeatureModule)
}
```
- In `types.ts` `DevFeature` enum remove `Example*` values and add your own for each feature you wish to control.
- Navigate to `AngularDevelopmentCookiesComponent` with `[specified-route]/set?features=[features-to-enable]`.
  - `DevFeature.All` will enable all features.
  - New provided value will override existing old one.
  - To enable multiple specific features, combine their flags with `|`. Like so: `*/set?features=556a3babea53f0f9a2dedb8f6a5c472fc3521615|146525784a68f39e8bcc0ec7e11498c3b7b402b5`.
  - To clear all features, leave `features` empty (`*/set?features=`) or don't provide it at all (`*/set`). 
- On feature route add `canActivate: [DevFeatureGuard]` and a specific `devFeature` property to `data` object. Like so: 
```
{
  path: 'example-one',
  component: ExampleFeatureOneComponent,
  canActivate: [DevFeatureGuard],
  data: {
    devFeature: DevFeature.Example1
  }
}
```
- Guard will check whether the provided feature is stored in the cookie.
  - If so, it will pass through (other guards are respected).
  - If not, it will redirect to `PAGE_NOT_FOUND_PATH` (stored in `types.ts`, root page by default).
- To control whether child component is rendered inside HTML template, 
use `HasDevFeatureEnabledDirective` structural directive and provide specific feature flag as input e.g.
```
<div *hasDevFeatureEnabled="featureFlag" >
  <p>Work in progress</p>
</div>
```

## Customizing library
Few ideas on how to customize the library for your project's implementation.

- Changing `FEATURES_COOKIE_KEY_NAME` value will change the cookie that the flags are stored.
- Changing `PAGE_NOT_FOUND_PATH` value will change where user is redirected on failed guard (e.g. 404 page).
  - Alternatively, you can extend `DevFeatureGuard` to accept an additional `data` property, which would specify a page to navigate to. 
That would allow control of each route's redirect individually. 
- By default, cookies are set to expire after 14 days. To change this, update `COOKIE_EXPIRE_DATE` value.
Or, add custom logic to `DevFeatureService.setCookieValue` method.
- `AngularDevelopmentCookiesComponent` is left "rough" (encoded flags, navigation only by URL, no UI) intentionally, so users wouldn't access it.
However, you can add a policy gourd on route and customize the component as you wish.  

## Example application
`example/feature-flags` library contains an example application using feature flags.
It contains two pages and an inline HTML element. To view it, navigate to `*/feature-flags`.
To set feature flags, navigate to `*/feature-flags/angular-development-cookies/set`.
Set enabled flags according to `types.ts` values.
