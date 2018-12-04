// declare modules
angular.module('Login', []);
angular.module('Home', []);

var app = angular.module('myApp', ['Login','Home','ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    
    .when('/', {
       templateUrl: 'modules/login/views/login.html',
       controller: 'LoginController'
    })
    .when('/employees', {
        templateUrl: 'modules/home/views/employees.html',
        controller: 'EmployeesCtrl'
    })
    .otherwise({
       redirectTo: '/'
    });
 }]);
