'use strict';

angular.module('clinicalApp').directive('messages', function () {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'views/chat.container.html'
  };
});