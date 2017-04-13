var app = angular.module('personalWebApp',['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
  .when("/about",{templateUrl :"../../templates/about.html", controller: "PageCtrl"})
}]);

app.controller('PageCtrl', function (/* $scope, $location, $http */) {
console.log("Page Controller reporting for duty.");
});
