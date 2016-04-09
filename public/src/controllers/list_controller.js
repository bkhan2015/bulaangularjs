angular.module('contactApp')
        .controller('ListController', function ($scope){
          $scope.title = 'List Of Contacts';
          $scope.person = {greeted: false};
          $scope.clock  = {
            now:  new Date()
          };
          var updateClock = function(){
              $scope.clock.now = new Date()
          };
          setInterval(function(){
            $scope.$apply(updateClock);
          },1000);
          updateClock();

          $scope.sayHello = function(){
            $scope.person.name = "Bula Khan";
            $scope.person.greeted = true;
          }
});
