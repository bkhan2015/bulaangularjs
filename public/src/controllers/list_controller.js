angular.module('contactApp')
        .controller('ListController', 'Contact', function ($scope, Contact){
          //$scope.title = 'List Of Contacts';
          Contact.get().then(function(data){
            $scope.contacts = data.data;
          });

        //  $scope.person = {greeted: false};
        //  $scope.clock  = {
        //    now:  new Date()
        //  };
        //  var updateClock = function(){
        //      $scope.clock.now = new Date()
      //    };
      //    setInterval(function(){
      //      $scope.$apply(updateClock);
      //    },1000);
      //    updateClock();

        //  $scope.sayHello = function(){
        //    $scope.person.name = "Bula Khan";
        //    $scope.person.greeted = true;
      //    }
});
