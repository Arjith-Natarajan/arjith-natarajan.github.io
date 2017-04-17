var app = angular.module('personalWebApp',['ngRoute']);

// Handled HashBang ! issue by adding this snippet
app.config(['$locationProvider', function($locationProvider) {
  $locationProvider.hashPrefix('');
}]);
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
  .when("/about",{templateUrl :"../../templates/about.html", controller: "PageCtrl"})
}]);

app.controller('PageCtrl', function (/* $scope, $location, $http */) {
console.log("Page Controller reporting for duty.");
});
