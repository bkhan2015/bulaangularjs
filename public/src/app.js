angular.module('contactApp', ['ngRoute']);
// older code
  angular.module('contactApp')
       //.controller('ListController', function ($scope){
      //  $scope.title = "Contact Application";
      .config(function contact($routeProvider, $locationProvider){
      $routeProvider
      .when('/contacts', {
       controller: 'ListController',
       templateUrl: 'views/contact-list.html'
      })

      $locationProvider.html5Mode(true);
});
