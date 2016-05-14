angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in miscellaneous-cost.js
  $stateProvider

  .state('menu', {
    url: '/nav-menu',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl',
    abstract:true
  })

  .state('menu.signUp', {
    url: '/sign-up',
    views: {
      'menuContent': {
        templateUrl: 'templates/signUp.html',
        controller: 'signUpCtrl'
      },
      'fabLeftContent': {
        template: ''
      },
      'fabRightContent': {
        template: ''
      }
    }
  })

  .state('menu.login', {
    url: '/login',
    views: {
      'menuContent': {
        templateUrl: 'templates/login.html',
        controller: 'loginCtrl'
      },
      'fabLeftContent': {
        template: ''
      },
      'fabRightContent': {
        template: ''
      }
    }
  })

  .state('menu.home', {
    url: '/home',
    views: {
      'menuContent': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      },
      'fabLeftContent': {
        template: ''
      },
      'fabRightContent': {
        template: ''
      }
    }
  })

  .state('menu.vehicles', {
    url: '/manage-vehicles',
    views: {
      'menuContent': {
        templateUrl: 'templates/vehicles.html',
        controller: 'vehiclesCtrl'
      },
      'fabLeftContent': {
        template: ''
      },
      'fabRightContent': {
        template: '<button ui-sref=\'menu.addEditVehicle({ mode : "ADD"})\' id="fab-vehicles-add" class="button button-fab button-fab-bottom-right button-balanced-900"><i class="icon ion-plus"></i></button>',
        controller: function ($timeout) {
          $timeout(function () {
            document.getElementById('fab-vehicles-add').classList.toggle('on');
          }, 200);
        }
      }
    }
  })

  .state('menu.vehicle', {
    url: '/vehicle/:mode?license_plate_no',
    views: {
      'menuContent': {
        templateUrl: 'templates/vehicle.html',
        controller: 'vehicleCtrl'
      },
      'fabLeftContent': {
        template: '<button id="fab-vehicle-delete" class="button button-fab button-fab-bottom-left button-assertive-900"><i class="icon ion-android-cancel"  ng-hide=\'mode == "MANAGED"\'></i></button>',
        controller: function ($timeout) {
          $timeout(function () {
            document.getElementById('fab-vehicle-delete').classList.toggle('on');
          }, 200);
        }
      },
      'fabRightContent': {
        template: '<button ui-sref=\'menu.addEditVehicle({ mode : "EDIT", name : vehicle.name, license_plate_no : vehicle.license_plate_no, description : vehicle.description, fuel_one : vehicle.fuel_one, fuel_two : vehicle.fuel_two, make : vehicle.make, model : vehicle.model, year : vehicle.year })\' id="fab-vehicle-edit" class="button button-fab button-fab-bottom-right button-positive-900"  ng-hide=\'mode == "MANAGED"\'><i class="icon ion-edit"></i></button>',
        controller: function ($timeout) {
          $timeout(function () {
            document.getElementById('fab-vehicle-edit').classList.toggle('on');
          }, 200);
        }
      }
    }
  })

  .state('menu.addFuelFillUp', {
    url: '/add-edit-fill-up',
    views: {
      'menuContent': {
        templateUrl: 'templates/addFuelFillUp.html',
        controller: 'addFuelFillUpCtrl'
      },
      'fabLeftContent': {
        template: ''
      },
      'fabRightContent': {
        template: ''
      }
    }
  })

  .state('menu.addMiscellaneousCost', {
    url: '/add-edit-misc-cost',
    views: {
      'menuContent': {
        templateUrl: 'templates/addMiscellaneousCost.html',
        controller: 'addMiscellaneousCostCtrl'
      },
      'fabLeftContent': {
        template: ''
      },
      'fabRightContent': {
        template: ''
      }
    }
  })

  .state('menu.addCheckIn', {
    url: '/add-edit-check-in',
    views: {
      'menuContent': {
        templateUrl: 'templates/addCheckIn.html',
        controller: 'addCheckInCtrl'
      },
      'fabLeftContent': {
        template: ''
      },
      'fabRightContent': {
        template: ''
      }
    }
  })

  .state('menu.checkIns', {
    url: '/check-ins',
    views: {
      'menuContent': {
        templateUrl: 'templates/checkIns.html',
        controller: 'checkInsCtrl'
      },
      'fabLeftContent': {
        template: ''
      },
      'fabRightContent': {
        template: ''
      }
    }
  })

  .state('menu.fuelFillUps', {
    url: '/fill-ups',
    views: {
      'menuContent': {
        templateUrl: 'templates/fuelFillUps.html',
        controller: 'fuelFillUpsCtrl'
      },
      'fabLeftContent': {
        template: ''
      },
      'fabRightContent': {
        template: ''
      }
    }
  })

  .state('menu.addEditVehicle', {
    url: '/add-edit-vehicle/:mode?name&license_plate_no&description&fuel_one&fuel_two&make&model&year',
    views: {
      'menuContent': {
        templateUrl: 'templates/addEditVehicle.html',
        controller: 'addEditVehicleCtrl'
      },
      'fabLeftContent': {
        template: ''
      },
      'fabRightContent': {
        template: ''
      }
    }
  })

  .state('menu.settings', {
    url: '/settings',
    views: {
      'menuContent': {
        templateUrl: 'templates/settings.html',
        controller: 'settingsCtrl'
      },
      'fabLeftContent': {
        template: ''
      },
      'fabRightContent': {
        template: ''
      }
    }
  })

  .state('menu.miscellaneousCosts', {
    url: '/misc-costs',
    views: {
      'menuContent': {
        templateUrl: 'templates/miscellaneousCosts.html',
        controller: 'miscellaneousCostsCtrl'
      },
      'fabLeftContent': {
        template: ''
      },
      'fabRightContent': {
        template: ''
      }
    }
  })

  .state('menu.generateReport', {
    url: '/generate-report',
    views: {
      'menuContent': {
        templateUrl: 'templates/generateReport.html',
        controller: 'generateReportCtrl'
      },
      'fabLeftContent': {
        template: ''
      },
      'fabRightContent': {
        template: ''
      }
    }
  })

  .state('menu.report', {
    url: '/report',
    views: {
      'menuContent': {
        templateUrl: 'templates/generateReport.html',
        controller: 'generateReportCtrl'
      },
      'fabLeftContent': {
        template: ''
      },
      'fabRightContent': {
        template: ''
      }
    }
  })

  .state('menu.checkIn', {
    url: '/check-in',
    views: {
      'menuContent': {
        templateUrl: 'templates/checkIn.html',
        controller: 'checkInCtrl'
      },
      'fabLeftContent': {
        template: ''
      },
      'fabRightContent': {
        template: ''
      }
    }
  })

  .state('menu.fuelFillUp', {
    url: '/fill-up',
    views: {
      'menuContent': {
        templateUrl: 'templates/fuelFillUp.html',
        controller: 'fuelFillUpCtrl'
      },
      'fabLeftContent': {
        template: ''
      },
      'fabRightContent': {
        template: ''
      }
    }
  })

  .state('menu.miscellaneousCost', {
    url: '/misc-cost',
    views: {
      'menuContent': {
        templateUrl: 'templates/miscellaneousCost.html',
        controller: 'miscellaneousCostCtrl'
      },
      'fabLeftContent': {
        template: ''
      },
      'fabRightContent': {
        template: ''
      }
    }
  });

$urlRouterProvider.otherwise('/nav-menu/login')

});
