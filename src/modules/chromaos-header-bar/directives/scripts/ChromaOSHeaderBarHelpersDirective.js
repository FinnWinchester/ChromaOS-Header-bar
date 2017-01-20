(function(angular) {
  'use strict';

  function ChromaOSHeaderBarHelpersDirective(ChromaOSHeaderBarService, $, $rootScope) {

    function ChromaOSHeaderBarHelpersDirectiveLink($scope, $element, $attrs, $controller) {
      $scope.checkStyles = function(helper) {
        if (helper.config && helper.config.width) {
          return {
            width: helper.config.width
          };
        }
      };

			$(document).on('click', '.dropdown-menu', function(e) {
        if ($(this).hasClass('keepAlive')) {
          e.stopPropagation();
        }
      });

    }

    var directive = {
      restrict: 'EA',
      scope: {
        helpers: '='
      },
      templateUrl: 'modules/chromaos-header-bar/directives/views/ChromaOSHeaderBarHelpersDirectiveTemplate.html',
      link: ChromaOSHeaderBarHelpersDirectiveLink
    };

    return directive;
  }

  angular.module('ChromaOSHeaderBar.Modules.HeaderBar')

  .directive('chromaosHeaderBarHelpers', ChromaOSHeaderBarHelpersDirective);

  ChromaOSHeaderBarHelpersDirective.$inject = ['ChromaOSHeaderBarService', '$', '$rootScope'];
})(window.angular);
