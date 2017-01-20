/* global $:false */
(function(angular) {
  'use strict';

  angular.module('ChromaOSHeaderBar.Kernel', [])

  .constant('$', $);

})(window.angular);
;(function(angular) {
  'use strict';

  angular.module('ChromaOSHeaderBar.Services', []);

})(window.angular);
;(function(angular) {
  'use strict';

  function ChromaOSHeaderBarService() {

    var factory = {};

    return factory;
  }

  angular.module('ChromaOSHeaderBar.Services')

  .factory('ChromaOSHeaderBarService', ChromaOSHeaderBarService);

  ChromaOSHeaderBarService.$inject = [];
})(window.angular);
;(function(angular) {
  'use strict';

  angular.module('ChromaOSHeaderBar.Modules', [
		'ChromaOSHeaderBar.Modules.HeaderBar'
	]);

})(window.angular);
;(function(angular) {
  'use strict';

  angular.module('ChromaOSHeaderBar.Modules.HeaderBar', []);

})(window.angular);
;(function(angular) {
  'use strict';

  function ChromaOSHeaderBarCompilerDirective($compile) {

    function ChromaOSHeaderBarCompilerDirectiveLink($scope, $element, $attrs, $controller) {
			var compiledTemplate = $compile($scope.tpl)($scope);
			$element.replaceWith(compiledTemplate);
			$element = compiledTemplate;
    }

    var directive = {
      restrict: 'EA',
      scope: {
        tpl: '='
      },
      templateUrl: 'modules/chromaos-header-bar/directives/views/ChromaOSHeaderBarCompilerDirectiveTemplate.html',
      link: ChromaOSHeaderBarCompilerDirectiveLink
    };

    return directive;
  }

  angular.module('ChromaOSHeaderBar.Modules.HeaderBar')

  .directive('chromaosHeaderBarCompiler', ChromaOSHeaderBarCompilerDirective);

  ChromaOSHeaderBarCompilerDirective.$inject = ['$compile'];
})(window.angular);
;(function(angular) {
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
;(function(angular) {
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
;(function(angular) {
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
;angular.module('ChromaOSHeaderBar.Templates', ['modules/chromaos-header-bar/directives/views/ChromaOSHeaderBarCompilerDirectiveTemplate.html', 'modules/chromaos-header-bar/directives/views/ChromaOSHeaderBarDirectiveTemplate.html', 'modules/chromaos-header-bar/directives/views/ChromaOSHeaderBarHelpersDirectiveTemplate.html', 'modules/chromaos-header-bar/directives/views/ChromaOSHeaderBarMenusDirectiveTemplate.html']);

angular.module("modules/chromaos-header-bar/directives/views/ChromaOSHeaderBarCompilerDirectiveTemplate.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/chromaos-header-bar/directives/views/ChromaOSHeaderBarCompilerDirectiveTemplate.html",
    "<div></div>\n" +
    "");
}]);

angular.module("modules/chromaos-header-bar/directives/views/ChromaOSHeaderBarDirectiveTemplate.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/chromaos-header-bar/directives/views/ChromaOSHeaderBarDirectiveTemplate.html",
    "<div class=\"chromaos-header-bar\">\n" +
    "	<div class=\"chromaos-header-bar-icon\">\n" +
    "		<div class=\"chromaos-header-bar-menu chromaos-header-bar-main-menu\">\n" +
    "			<div class=\"dropdown-toggle no-caret\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" ng-class=\"{'no-hover': mainMenu.options.length === 0}\">\n" +
    "				<i class=\"{{systemMenu.icon}} fa-fw\"></i>\n" +
    "			</div>\n" +
    "			<div class=\"dropdown-menu\" ng-if=\"systemMenu.options.length > 0\">\n" +
    "				<div ng-repeat=\"option in systemMenu.options\">\n" +
    "					<h6 class=\"dropdown-header\" ng-if=\"option.isHeader\">{{option.title}}</h6>\n" +
    "					<div class=\"dropdown-item\" ng-if=\"!option.isDivider && !option.isHeader\" ng-click=\"clickMenuOption(option);\">\n" +
    "						<span ng-bind-html=\"option.title | chromaosHeaderBarUnsafe\"></span>\n" +
    "					</div>\n" +
    "					<div class=\"dropdown-divider\" ng-if=\"option.isDivider\"></div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<div class=\"chromaos-header-bar-title\">\n" +
    "		<div class=\"chromaos-header-bar-menu chromaos-header-bar-menu-special\">\n" +
    "			<div class=\"dropdown-toggle no-caret\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" ng-class=\"{'no-hover': mainMenu.options.length === 0}\">\n" +
    "				{{mainMenu.title}}\n" +
    "			</div>\n" +
    "			<div class=\"dropdown-menu\">\n" +
    "				<div ng-repeat=\"option in mainMenu.options\">\n" +
    "					<h6 class=\"dropdown-header\" ng-if=\"option.isHeader\">{{option.title}}</h6>\n" +
    "					<div class=\"dropdown-item\" ng-if=\"!option.isDivider && !option.isHeader\" ng-click=\"clickMenuOption(option);\">\n" +
    "						<span ng-bind-html=\"option.title | chromaosHeaderBarUnsafe\"></span>\n" +
    "					</div>\n" +
    "					<div class=\"dropdown-divider\" ng-if=\"option.isDivider\"></div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<div class=\"chromaos-header-bar-menus\">\n" +
    "		<div chromaos-header-bar-menus menus=\"menus\" ng-if=\"menus\"></div>\n" +
    "	</div>\n" +
    "	<div class=\"chromaos-header-bar-helpers\">\n" +
    "		<div chromaos-header-bar-helpers helpers=\"helpers\" ng-if=\"helpers\"></div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("modules/chromaos-header-bar/directives/views/ChromaOSHeaderBarHelpersDirectiveTemplate.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/chromaos-header-bar/directives/views/ChromaOSHeaderBarHelpersDirectiveTemplate.html",
    "<div class=\"chromaos-header-bar-helpers-wrapper\">\n" +
    "	<div class=\"chromaos-header-bar-helpers-wrapper-helper\" ng-repeat=\"helper in helpers\">\n" +
    "		<div class=\"dropdown-toggle no-caret\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\" ng-if=\"helper.action\" ng-click=\"helper.action();\">\n" +
    "			<i class=\"{{helper.icon}} fa-fw\"></i>\n" +
    "		</div>\n" +
    "		<div class=\"dropdown-toggle no-caret\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\" ng-if=\"!helper.action\">\n" +
    "			<i class=\"{{helper.icon}} fa-fw\"></i>\n" +
    "		</div>\n" +
    "		<div class=\"dropdown-menu dropdown-menu-right\" ng-if=\"!helper.action\" ng-style=\"checkStyles(helper);\" ng-class=\"{'keepAlive': helper.keepAlive}\">\n" +
    "			<div chromaos-header-bar-compiler tpl=\"helper.template\"></div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("modules/chromaos-header-bar/directives/views/ChromaOSHeaderBarMenusDirectiveTemplate.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/chromaos-header-bar/directives/views/ChromaOSHeaderBarMenusDirectiveTemplate.html",
    "<div class=\"chromaos-header-bar-menus-wrapper\">\n" +
    "	<div class=\"chromaos-header-bar-menu chromaos-header-bar-menu-special\" ng-class=\"{'active': menu.isActive}\" ng-repeat=\"menu in menus\">\n" +
    "		<div class=\"dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n" +
    "			{{menu.title}}\n" +
    "		</div>\n" +
    "		<div class=\"dropdown-menu\">\n" +
    "			<div ng-repeat=\"option in menu.options\">\n" +
    "				<h6 class=\"dropdown-header\" ng-if=\"option.isHeader\">{{option.title}}</h6>\n" +
    "				<div class=\"dropdown-item\" ng-if=\"!option.isDivider && !option.isHeader\" ng-click=\"clickMenuOption(option);\">\n" +
    "					<span ng-bind-html=\"option.title | chromaosHeaderBarUnsafe\"></span>\n" +
    "				</div>\n" +
    "				<div class=\"dropdown-divider\" ng-if=\"option.isDivider\"></div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "");
}]);
;(function(angular) {
  'use strict';

  angular.module('ChromaOSHeaderBar', [
    'ChromaOSHeaderBar.Kernel',
		'ChromaOSHeaderBar.Templates', // Needed when grunting templates (HTML2JS).
		'ChromaOSHeaderBar.Modules',
		'ChromaOSHeaderBar.Services'
	]);

})(window.angular);
