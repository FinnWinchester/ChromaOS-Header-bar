angular.module('myapp', ['ChromaOSHeaderBar'])

  .controller('ChromaOSController', ['$scope', '$rootScope', function($scope, $rootScope) {

    $scope.systemMenu = {
      icon: 'fa fa-android',
      options: [{
        title: 'About this plugin',
        action: function() {}
      }, {
        isDivider: true
      }, {
        title: 'Preferences',
        action: function() {}
      }, {
        title: 'Updates',
        action: function() {}
      }, {
        isDivider: true
      }, {
        title: 'Sleep',
        action: function() {}
      }, {
        title: 'Reboot',
        action: function() {}
      }]
    };

    $scope.mainMenu = {
      title: 'ChromaOSHeaderBar',
      options: [{
        title: 'ChromaOS',
        isHeader: true
      }, {
        title: '<i class="fa fa-home fa-fw"></i> New',
        action: function() {}
      }, {
        title: 'Open',
        action: function() {}
      }, {
        isDivider: true
      }, {
        title: 'Open',
        action: function() {}
      }]
    };

    $scope.menus = [{
      title: 'File',
      options: [{
        title: 'Header 1',
        isHeader: true
      }, {
        title: '<i class="fa fa-home fa-fw"></i> New',
        action: function() {}
      }, {
        title: 'Open',
        action: function() {}
      }, {
        isDivider: true
      }, {
        title: 'Open',
        action: function() {}
      }]
    }, {
      title: 'Edit',
      options: [{
        title: 'Header 2',
        isHeader: true
      }, {
        title: 'Copy',
        action: function() {}
      }, {
        isDivider: true
      }, {
        title: 'Paste',
        action: function() {}
      }]
    }, {
      title: 'View',
      options: [{
        title: 'Option 1',
        action: function() {}
      }, {
        title: 'Option 2',
        action: function() {}
      }, {
        title: 'Option 3',
        action: function() {}
      }, {
        isDivider: true
      }, {
        title: 'Option 4',
        action: function() {}
      }, {
        isDivider: true
      }, {
        title: 'Option 5',
        action: function() {}
      }]
    }];

    $scope.helpers = [{
      icon: 'fa fa-bluetooth',
      title: 'Bluetooth',
      action: function() {}
    }, {
      icon: 'fa fa-android',
      title: 'Android',
      template: '<div test-app></div>',
      keepAlive: true,
      config: {
        width: '450px'
      }
    }, {
      icon: 'fa fa-battery-3',
      title: 'Battery',
      action: function() {}
    }];

    $scope.remainmenu = function() {
      $rootScope.$broadcast('chromaos-header-bar.main-menu.all.change', {
        mainMenu: {
          title: 'ChromaOSHeaderBar',
          options: [{
            title: 'ChromaOS',
            isHeader: true
          }, {
            title: '<i class="fa fa-home fa-fw"></i> New',
            action: function() {}
          }, {
            title: 'Open',
            action: function() {}
          }, {
            isDivider: true
          }, {
            title: 'Open',
            action: function() {}
          }]
        }
      });
    };

    $scope.reicon = function() {
      var icons = ['fa fa-address-book', 'fa fa-android', 'fa fa-apple', 'fa fa-facebook', 'fa fa-snowflake-o'];
      var rand = icons[Math.floor(Math.random() * icons.length)];
      $rootScope.$broadcast('chromaos-header-bar.system-menu.icon.change', {
        icon: rand
      });
    };

    $scope.retitle = function() {
      function makeString() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 0123456789";

        for (var i = 0; i < 15; i++)
          text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
      }
      $rootScope.$broadcast('chromaos-header-bar.main-menu.title.change', {
        title: makeString()
      });
    };

    $scope.addmenu = function() {
      $rootScope.$broadcast('chromaos-header-bar.menus.add', {
        menu: {
          title: 'Extension',
          options: [{
            title: 'Project manager',
            isHeader: true
          }, {
            title: '<i class="fa fa-home fa-fw"></i> New project...',
            action: function() {}
          }, {
            title: 'Open project...',
            action: function() {}
          }, {
            isDivider: true
          }, {
            title: 'About',
            action: function() {}
          }]
        }
      });
    };

    $scope.remenus = function() {
      $rootScope.$broadcast('chromaos-header-bar.menus.change', {
        menus: [{
          title: 'Menu 1',
          options: [{
            title: 'New',
            action: function() {}
          }, {
            isDivider: true
          }, {
            title: 'Menu 1 option 1',
            action: function() {}
          }, {
            isDivider: true
          }, {
            title: 'Menu 1 option 2',
            action: function() {}
          }]
        }]
      });
    };

  }]);
