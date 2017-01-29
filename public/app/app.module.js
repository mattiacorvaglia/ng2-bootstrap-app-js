/**
 * This is the starting module of the angular application.
 *
 * @author     Mattia Corvaglia <corvagliamattia@gmail.com>
 * @see        http://www.mattiacorvaglia.com
 * @version    1.0.0
 * @since      1.0.0
 * @copyright  2017 Mattia Corvaglia All Rights Reserved.
 * @license    MIT
 */

'strict';

(function (app) {
  app.AppModule =
    ng.core.NgModule({
      imports: [
        ng.platformBrowser.BrowserModule,
        ng.http.HttpModule,
        ng.http.JsonpModule
      ],
      declarations: [
        app.AppComponent,
        app.FooComponent
      ],
      bootstrap: [ app.AppComponent ]
    })
    .Class({
      constructor: function () {}
    });
})(window.app || (window.app = {}));
