'use strict';

require('./_signup.scss');

module.exports = {
  template: require('./signup.html'),
  controllerAs: 'signupCtrl',
  controller: [
    '$log',
    '$location',
    '$window',
    'authService',
    function($log, $location, $window, authService) {
      this.$onInit = () => {
        $log.debug('SignupController');

        if(!$window.localStorage.token) {
          authService.getToken()
          .then(
            () => $location.url('/home'),
            () => $location.url('/signup')
          );
        }

        this.signup = function(user) {
          $log.debug('signupCtrl.signup()');
          authService.signup(user)
          .then(() => $location.url('/home'),
          err => console.error(err));
        };

      };
    },
  ],
};
