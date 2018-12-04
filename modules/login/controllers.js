angular.module('Login')
.controller('LoginController', function($scope, $http, $location) {
    $scope.submit = function() {
        var data=$scope.regObj; 
        console.log(data); 
        
        $http.get('/src/login.json').then(function(res){
            return user = res.data;
        }).then(function(user){
            if (user.username == $scope.regObj.username && user.password == $scope.regObj.password) {
                $location.path( "/employees" );
            } else {
                alert('error');
            }
        });
        /* post to server*/
        // $http({
        //     method: 'POST',
        //     url: '/src/login.json',
        //     data
        // }).then(function successCallback(response) {
        //     console.log(response);
        // }, function errorCallback(response) {
        //     console.log('error');
        // });
    }
 });
 