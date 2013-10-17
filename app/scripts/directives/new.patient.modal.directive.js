'use strict';

angular.module('clinicalApp').directive('newPatientModal', ['formConfiguration', 'encounterService', function(formConfiguration, encounterService) {
	return {
		restrict: 'A',
		templateUrl: 'views/new.patient.modal.html',
		scope: {
			
		},

		link: function(scope, elem, attrs) {

			function makeid()
			{
				var text = "";
				var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

				for( var i=0; i < 5; i++ )
					text += possible.charAt(Math.floor(Math.random() * possible.length));

				return text;
			}

			scope.submit = function() {
				var newPatientInfo = {};
				var newEncounter = {};
				newPatientInfo.payer = scope.currentPayer;
				newPatientInfo.memberId = scope.currentMemberId;
				newPatientInfo.relationshipToSubscriber = scope.currentRelationship;
				newPatientInfo.lastName = scope.currentLastName;
				newPatientInfo.firstName = scope.currentFirstName;
				scope.datepicker.date.setDate(scope.datepicker.date.getDate() + 1);
				newPatientInfo.serviceDate = scope.datepicker.date.toDateString();

				newEncounter.actors = [];
				newEncounter.actors.push({brandName:newPatientInfo.payer});
				newEncounter.id = newPatientInfo.memberId;
				newEncounter.patient = {};
				newEncounter.patient.relationship = newPatientInfo.relationshipToSubscriber;
				newEncounter.patient.lastName = newPatientInfo.lastName
				newEncounter.patient.firstName = newPatientInfo.firstName
				newEncounter.patient.dateOfBirth = scope.datepicker.date.toISOString();

				



				encounterService.pushNewEncounter(newEncounter);
			}
		}
	};
}]);