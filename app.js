// app.js

angular.module('myApp', [])
  .controller('myController', function($scope, $http) {
    $scope.message = 'Hello, Fellow VITians';
    
    $scope.save = function() {
      // Save the form data to the backend (using $http or $resource)
      var data = {
        name: $scope.name,
        email: $scope.email
      };
      
      $http.post('/save-data', data)
        .then(function(response) {
          // Handle success response
          console.log(response);
        })
        .catch(function(error) {
          // Handle error response
          console.log(error);
        });
    };
  });
