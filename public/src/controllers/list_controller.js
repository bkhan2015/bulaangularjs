angular.module('contactApp')
        .controller('ListController', function ($scope, ContactResolved){
        //$scope.title = 'List Of Contacts';
        //  setTimeout(function (argument){
        //  Contact.get().then(function(data){
        //    $scope.contacts = data.data;
        //  });
      //  }, 4000);
      // through resolve services
      $scope.contacts = ContactResolved.data;
      
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
