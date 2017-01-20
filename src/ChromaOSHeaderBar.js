(function(angular) {
  'use strict';

  angular.module('ChromaOSHeaderBar', [
    'ChromaOSHeaderBar.Kernel',
		'ChromaOSHeaderBar.Templates', // Needed when grunting templates (HTML2JS).
		'ChromaOSHeaderBar.Modules',
		'ChromaOSHeaderBar.Services'
	]);

})(window.angular);
