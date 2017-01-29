/**
 * This is the component.
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
  app.FooComponent =
    ng.core.Component({
      selector: 'foo',
      templateUrl: 'app/foo/foo.component.html',
      providers: [ app.FooService ]
    })
    .Class({
      constructor: [app.FooService, function (svc) {
        this.reqs       = [];
        this.submitted  = false;
        this.fooService = svc;
      }],
      doConfirm: function () {
        this.submitted = true;
      },
      doRequest: function (req) {
        if (!req) { return; }
        this.fooService.doRequest(req)
          .subscribe(
            this.onSuccess.bind(this),
            this.onFail.bind(this)
          );
      },
      onSuccess: function (data) {
        this.reqs.push(data.status);
      },
      onFail: function (error) {
        this.reqs.push(error);
      }
    });
})(window.app || (window.app = {}));
