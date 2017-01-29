/**
 * This is the service.
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
  app.FooService = ng.core
    .Component({
      providers: [
        ng.http.HTTP_PROVIDERS,
        Rx.Observable
      ]
    })
    .Class({
      constructor: [ng.http.Http, function (http) {
        this.http = http;
      }],
      doRequest: function (name) {
        return this.http.get('/'+name)
          .map(this.extractJson)
          .catch(this.handleError);
      },
      extractJson: function (res) {
        return res.json();
      },
      handleError: function (err) {
        var objConstructor = {}.constructor;
        var errMsg = '';
        if (err.constructor === objConstructor) {
          var body = err.json() || '';
          var errBody = body.error || JSON.stringify(body);
          errMsg = err.status+' - '+(err.statusText || '')+' '+errBody;
        } else {
          errMsg = err.message ? err.message : err.toString();
        }
        return Rx.Observable.throw(errMsg);
      }
    });
})(window.app || (window.app = {}));
