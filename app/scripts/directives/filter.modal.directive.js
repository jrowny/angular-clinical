'use strict';

angular.module('clinicalApp').directive('filterModal', ['formConfiguration', 'encounterService', function(formConfiguration, encounterService) {
	return {
		restrict: 'A',
		templateUrl: 'views/filter.modal.html',
		scope: {
			
		},

		link: function(scope, elem, attrs) {
			scope.submit = function() {
				var searchTermsObj = {};
				searchTermsObj.authRequestType = scope.authRequestType;
				searchTermsObj.dateRange = scope.dateRange;
				searchTermsObj.actorIds = scope.facilityActorIds; //
				searchTermsObj.payer = scope.payer;
				searchTermsObj.actionStatuses = scope.actionStatuses; //
				searchTermsObj.actionType = "AUTO_AUTH"; //
				searchTermsObj.limit = 10;
				encounterService.setFilterTerms(searchTermsObj);
			}
		}
	};
}]);