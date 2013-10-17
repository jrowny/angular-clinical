'use strict';

angular.module('clinicalApp').directive('filterModal', ['formConfiguration', 'encounterService', function(formConfiguration, encounterService) {
	return {
		restrict: 'A',
		templateUrl: 'views/filter.modal.html',
		scope: {
			
		},

		link: function(scope, elem, attrs) {
			scope.submit = function() {
				console.log(scope.authRequestType);
				console.log(scope.dateRange);
				console.log(scope.facilityActorIds);
				console.log(scope.payer);
				console.log(scope.actionStatus);
			}
		}
	};
}]);