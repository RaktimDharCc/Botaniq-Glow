import 'jquery';

declare module 'jquery' {
  interface JQuery<TElement = HTMLElement> {
    sticky(options?: any): JQuery<TElement>;
  }
}
