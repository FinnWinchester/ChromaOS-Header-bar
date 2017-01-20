(function(angular) {
  'use strict';

  function ChromaOSHeaderBarMenusDirective(ChromaOSHeaderBarService) {

    function ChromaOSHeaderBarMenusDirectiveLink($scope, $element, $attrs, $controller) {

      $scope.clickMenuOption = function(option) {
        option.action();
      };

    }

    var directive = {
      restrict: 'EA',
      scope: {
        menus: '='
      },
      templateUrl: 'modules/chromaos-header-bar/directives/views/ChromaOSHeaderBarMenusDirectiveTemplate.html',
      link: ChromaOSHeaderBarMenusDirectiveLink
    };

    return directive;
  }

  angular.module('ChromaOSHeaderBar.Modules.HeaderBar')

  .directive('chromaosHeaderBarMenus', ChromaOSHeaderBarMenusDirective);

  ChromaOSHeaderBarMenusDirective.$inject = ['ChromaOSHeaderBarService'];
})(window.angular);
