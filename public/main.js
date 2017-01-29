/**
 * This is the main angular code.
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
  document.addEventListener('DOMContentLoaded', function () {
    ng.platformBrowserDynamic
      .platformBrowserDynamic()
      .bootstrapModule(app.AppModule);
  });
})(window.app || (window.app = {}));
