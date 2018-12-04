angular.module('Home')
 .controller('EmployeesCtrl', function($scope, $http) {
    $http.get("/src/employees.json")
    .then(function (response) {
        console.log(response);
        $scope.employees = response.data;
     });
     $scope.orderBy = function(x) {
         $scope.filterBy = x;
       }
 });