(function(angular) {

  function TestAppDirective() {

    function TestAppDirectiveLink($scope) {
      $scope.shopList = [];

      var addElement = function(element) {
        $scope.shopList.push(element);
      };

      $scope.createElement = function() {
        if (isNaN($scope.units) || isNaN($scope.unitaryPrice)) {

        } else {
          addElement({
            name: $scope.name,
            units: $scope.units,
            unitaryPrice: $scope.unitaryPrice,
          });
          $scope.name = '';
          $scope.units = '';
          $scope.unitaryPrice = '';
        }
      }
    }

    var directive = {
      restrict: 'A',
      scope: {},
      templateUrl: '/app/TestApp/TestAppDirectiveTemplate.html',
      link: TestAppDirectiveLink
    };

    return directive;

  }

  angular.module('myapp')

  .directive('testApp', TestAppDirective);

  // TestAppDirective.$inject = ['$scope'];
  // runFunction.$inject = ['ChromaOSAppsService'];

})(window.angular);
