(function(angular) {
  'use strict';

  function ChromaOSHeaderBarDirective(ChromaOSHeaderBarService, $rootScope, $timeout) {

    function ChromaOSHeaderBarDirectiveLink($scope, $element, $attrs, $controller) {

      if (!$scope.systemMenu || !$scope.mainMenu || !$scope.menus || !$scope.helpers) {
        throw new Error('There are empty required parameters.');
      }

      // Change whole system menu (icon and options).
      $rootScope.$on('chromaos-header-bar.system-menu.all.change', function(e, args) {
        $timeout(function() {
          $scope.systemMenu = args.systemMenu;
        }, 0);
      });

      // Change system menu's icon (only).
      $rootScope.$on('chromaos-header-bar.system-menu.icon.change', function(e, args) {
        $timeout(function() {
          $scope.systemMenu.icon = args.icon;
        }, 0);
      });

      // Change system menu's menu options (only).
      $rootScope.$on('chromaos-header-bar.system-menu.options.change', function(e, args) {
        $timeout(function() {
          $scope.systemMenu.options = args.options;
        }, 0);
      });

      // Change whole main menu (options and title).
      $rootScope.$on('chromaos-header-bar.main-menu.all.change', function(e, args) {
        $timeout(function() {
          $scope.mainMenu = args.mainMenu;
        }, 0);
      });

      // Change whole main menu (title and options).
      $rootScope.$on('chromaos-header-bar.main-menu.all.change', function(e, args) {
        $timeout(function() {
          $scope.mainMenu = args.mainMenu;
        }, 0);
      });

      // Change main menu's title.
      $rootScope.$on('chromaos-header-bar.main-menu.title.change', function(e, args) {
        $timeout(function() {
          $scope.mainMenu.title = args.title;
        }, 0);
      });

      // Change main menu's options.
      $rootScope.$on('chromaos-header-bar.main-menu.options.change', function(e, args) {
        $timeout(function() {
          $scope.mainMenu.options = args.options;
        }, 0);
      });

      // Change bar's menus.
      $rootScope.$on('chromaos-header-bar.menus.change', function(e, args) {
        $timeout(function() {
          $scope.menus = args.menus;
        }, 0);
      });

      // Add menu to bar.
      $rootScope.$on('chromaos-header-bar.menus.add', function(e, args) {
        $timeout(function() {
          $scope.menus.push(args.menu);
        }, 0);
      });

    }

    var directive = {
      restrict: 'EA',
      scope: {
        systemMenu: '=',
        mainMenu: '=',
        menus: '=',
        helpers: '=',
        style: '@'
      },
      templateUrl: 'modules/chromaos-header-bar/directives/views/ChromaOSHeaderBarDirectiveTemplate.html',
      link: ChromaOSHeaderBarDirectiveLink
    };

    return directive;
  }

  angular.module('ChromaOSHeaderBar.Modules.HeaderBar')

  .directive('chromaosHeaderBar', ChromaOSHeaderBarDirective)

  .filter('chromaosHeaderBarUnsafe', ['$sce', function($sce) {
    return $sce.trustAsHtml;
  }]);

  ChromaOSHeaderBarDirective.$inject = ['ChromaOSHeaderBarService', '$rootScope', '$timeout'];
})(window.angular);
