/**
 * @author     Mattia Corvaglia <corvagliamattia@gmail.com>
 * @see        http://www.mattiacorvaglia.com
 * @version    1.0.0
 * @since      1.0.0
 * @copyright  2017 Mattia Corvaglia All Rights Reserved.
 * @license    MIT
 */

'strict';

(function (app) {
  app.AppComponent =
    ng.core.Component({
      selector: 'my-app',
      template: '<foo></foo>'
    })
    .Class({
      constructor: function () {}
    });
})(window.app || (window.app = {}));
