var app = angular.module('personalWebApp',['ngRoute']);

// Handled HashBang ! issue by adding this snippet
app.config(['$locationProvider', function($locationProvider) {
  $locationProvider.hashPrefix('');
}]);
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
  .when("/",{templateUrl :"../../index.html", controller: "PageCtrl"})
  .when("/services",{templateUrl :"../../templates/services.html", controller: "PageCtrl"})
  .when("/portfolio",{templateUrl :"../../templates/portfolio-item.html", controller: "PageCtrl"})
  .when("/about",{templateUrl :"../../templates/about.html", controller: "PageCtrl"})
  .when("/team",{templateUrl :"../../templates/portfolio-1-col.html", controller: "PageCtrl"})
  .when("/contact",{templateUrl :"../../templates/contact.html", controller: "PageCtrl"})
}]);

app.controller('PageCtrl', function (/* $scope, $location, $http */) {
console.log("Page Controller reporting for duty.");
});
