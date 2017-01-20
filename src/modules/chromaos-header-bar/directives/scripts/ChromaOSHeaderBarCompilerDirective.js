(function(angular) {
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
