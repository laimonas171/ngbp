export interface RouteTitle {
  title: string;
}

export interface RouteData extends RouteTitle {
  title: string;
}

export interface PageComponent extends RouteData {
  title: string;
}
