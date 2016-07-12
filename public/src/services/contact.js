angular.module('contactApp')
  .service('Contact', function contactService($http){
    return{
      get: function getContacts(id){
         return $http.get('/api/contact/:id', {id:id});
      }
    }
  });
