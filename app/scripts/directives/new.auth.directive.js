'use strict';

angular.module('clinicalApp').directive('newAuth', ['formConfiguration', function(formConfiguration) {
	return {
		restrict: 'A',
		scope: {
			// arguments here
			providers: '=',
			requestTypeDropDown: '=',
			testValue: '='
		},
		templateUrl: 'views/new.auth.html',
 
		link: function(scope, elem, attrs) {

			scope.diagnosisCodes = [];
			scope.procedureCodes = [];

			scope.addDiagnosisCode = function(newCode) {
				scope.diagnosisCodes.push(newCode);
			}

			scope.addProcedureCode = function(newCode) {
				scope.procedureCodes.push(newCode);
			}

			scope.test = function() {
				console.log("ya been tested");
			}

			//***********

			scope.populateDropDowns = function(requestTypeValue) {
				scope.getPlaceOfServiceDropDown(requestTypeValue);
				scope.getServiceTypeDropDown(requestTypeValue);
			}

			scope.getPlaceOfServiceDropDown = function (requestTypeValue) {
				for(var i=0; i<scope.dropDownConfigurations.length; i++) {
					if(scope.dropDownConfigurations[i].field === 'servicePlace' && scope.hasDependency(requestTypeValue, scope.dropDownConfigurations[i].dependencies)){
						scope.servicePlaceDropDown = scope.dropDownConfigurations[i];
						return scope.dropDownConfigurations[i];
					}
				}
			}

			scope.getRequestTypeDropDown = function() {
				for(var i=0; i<scope.dropDownConfigurations.length; i++) {
					if(scope.dropDownConfigurations[i].field === 'requestType'){
						return scope.dropDownConfigurations[i];
					}
				}
			}

			scope.getServiceTypeDropDown = function(requestTypeValue) {
				for(var i=0; i<scope.dropDownConfigurations.length; i++) {
					if(scope.dropDownConfigurations[i].field === 'serviceType' && scope.hasDependency(requestTypeValue, scope.dropDownConfigurations[i].dependencies)){
						scope.serviceTypeDropDown = scope.dropDownConfigurations[i];
						return scope.dropDownConfigurations[i];
					}
				}
			}

			scope.hasDependency = function(dependency, dependencyList) {
				if(dependencyList.requestType === dependency) {
						return true;
				}
				return false;
			}

			scope.submit = function() {
				var newAuthInfo = {}

				newAuthInfo.requestType = scope.currentRequestType;
				newAuthInfo.serviceType = scope.currentServiceType;
				newAuthInfo.placeOfService = scope.currentPlaceOfService;
				scope.datepicker.date.setDate(scope.datepicker.date.getDate() + 1);
				newAuthInfo.serviceDate = scope.datepicker.date.toDateString();
				newAuthInfo.diagnosisCodes = scope.diagnosisCodes;
				newAuthInfo.procedureCodes = scope.procedureCodes;
				newAuthInfo.referToProvider = scope.currentProvider;
				newAuthInfo.referToFacillity = scope.currentFacility;
				scope.result = newAuthInfo;
			}

			formConfiguration.search({}, function(data) {
				scope.formConfiguration = data;
				scope.dropDownConfigurations = data.formConfiguration.dropDownConfigurations;
				scope.requestTypeDropDown = scope.getRequestTypeDropDown();
			});
			//***********


		}
	};
}]);