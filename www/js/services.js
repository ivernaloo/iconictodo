// empty services provide api to the application
angular.module('ionictodo.services',[]).factory('Todo', ['$http','PARSE_CREDENTIALS',
  function($http){
    return {
      getAll:function(){
        return $http.get('https://api.parse.com/1/classes/Todo',{
          headers: {
            'X-Parse-Application-id': PARSE_CREDENTIALS.APP_ID, //来源传入的PARSE_CREDENTIALS
            'X-Parse-REST-API-Key': PARSE_CREDENTIALS.REST_API_KEY,
          }
        });
      },
      get: function(id){
        return $http.get('https://api.parse.com/1/classes/Todo/'+id, {
          headers: {
            'X-Parse-Application-Id': PARSE_CREDENTIALS.APP_ID,
            'X-Parse-REST-API-Key': PARSE_CREDENTIALS.REST_API_KEY
          }
        });
      },
      create: function(data){
        return $http.post
        (
          'https//api.parse.com/1/classes/Todo', data, {
            headers: {
              'X-Parse-Application-Id': PARSE_CREDENTIALS.APP_ID,
              'X-Parse-REST-API-Key': PARSE_CREDENTIALS.REST_API_KEY,
              'Content-Type':'application/json'
            }
          }
        );
      },
      edit: function(id, data){
        return $http.put
        ('https://api.parse.com/1/classes/Todo'+id, data, {
          headers: {
            'X-Parse-Application-Id': PARSE_CREDENTIALS.APP_ID,
            'X-Parse-REST-API-Key': PARSE_CREDENTIALS.REST_API_KEY,
            'Content-Type':'application/json'
          }
        })
      },
      delete: function(id){
        return $http.delete
        ('https://api.parse.com/1/classes/Todo'+id,  {
          headers: {
            'X-Parse-Application-Id': PARSE_CREDENTIALS.APP_ID,
            'X-Parse-REST-API-Key': PARSE_CREDENTIALS.REST_API_KEY,
            'Content-Type':'application/json'
          }
        })
      }
    }
  }
])
