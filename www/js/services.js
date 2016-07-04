// empty services provide api to the application
angular.module('ionictodo.services',[]).factory('Todo', ['$http','LEANCLOUD_CREDENTIALS',
  function($http){
    return {
      getAll:function(){
        return $http.get('https://api.leancloud.cn/1.1/classes/ionictodo',{
          headers: {
            'X-LC-Id': LEANCLOUD_CREDENTIALS.APP_ID, //来源传入的LEANCLOUD_CREDENTIALS
            'X-LC-Sign': LEANCLOUD_CREDENTIALS.REST_API_KEY,
          }
        });
      },
      get: function(id){
        return $http.get('https://api.leancloud.cn/1.1/classes/ionictodo/'+id, {
          headers: {
            'X-LC-Id': LEANCLOUD_CREDENTIALS.APP_ID,
            'X-LC-Sign': LEANCLOUD_CREDENTIALS.REST_API_KEY
          }
        });
      },
      create: function(data){
        return $http.post
        (
          'https//api.parse.com/1/classes/ionictodo', data, {
            headers: {
              'X-LC-Id': LEANCLOUD_CREDENTIALS.APP_ID,
              'X-LC-Sign': LEANCLOUD_CREDENTIALS.REST_API_KEY,
              'Content-Type':'application/json'
            }
          }
        );
      },
      edit: function(id, data){
        return $http.put
        ('https://api.leancloud.cn/1.1/classes/ionictodo'+id, data, {
          headers: {
            'X-LC-Id': LEANCLOUD_CREDENTIALS.APP_ID,
            'X-LC-Sign': LEANCLOUD_CREDENTIALS.REST_API_KEY,
            'Content-Type':'application/json'
          }
        })
      },
      delete: function(id){
        return $http.delete
        ('https://api.leancloud.cn/1.1/classes/ionictodo'+id,  {
          headers: {
            'X-LC-Id': LEANCLOUD_CREDENTIALS.APP_ID,
            'X-LC-Sign': LEANCLOUD_CREDENTIALS.REST_API_KEY,
            'Content-Type':'application/json'
          }
        })
      }
    }
  }
]).value(LEANCLOUD_CREDENTIALS,'LEANCLOUD_CREDENTIALS',{
  APP_ID : "FFnN2hso42Wego3pWq4X5qlu",
  REST_API_KEY : "d5bcbb897e19b2f6633c716dfdfaf9be,1453014943466"
})
