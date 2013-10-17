'use strict';

angular.module('clinicalApp').directive('clinicalHeader', function () {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'views/header.html',

    link: function(scope, elem, attrs) {

			scope.showModal = function() {
				$('#patient-modal').modal("show");
			}

		}
  };
});