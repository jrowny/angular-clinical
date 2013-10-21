'use strict';

angular.module('clinicalApp').directive('chatContainer', ['encounterService', function(encounterService) {
  return {
    scope: {
      encounter: '=',
      count: '='
    },

    templateUrl: 'views/chat.container.html',

    link: function(scope, elem) {
      scope.countStart = scope.count;

      scope.updateCount = function(chatText) {
        scope.count = scope.countStart - chatText.length;
      };

      scope.addMessage = function(message) {
        encounterService.save({
          id: scope.encounter.id
        });
        scope.resetChat();
      };

      scope.resetChat = function() {
        scope.chatText = '';
        scope.updateCount(scope.chatText);
      };

      scope.$on('selectedRowChange', function(data) {
        console.log("Changed");
      });
    }
  };
}]);