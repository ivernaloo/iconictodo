// empty services provide api to the application
angular.module('ionictodo.services',[]).factory('Todo', ['$http','LEANCLOUD_CREDENTIALS',
  function($http, LEANCLOUD_CREDENTIALS){
    return {
      getAll:function(){
        return $http.get('https://api.leancloud.cn/1.1/classes/ionictodo',{
          headers: {
            'x-avoscloud-application-id': LEANCLOUD_CREDENTIALS.APP_ID, //来源传入的LEANCLOUD_CREDENTIALS
            'x-avoscloud-application-key': LEANCLOUD_CREDENTIALS.REST_API_KEY,
          }
        });
      },
      get: function(id){
        return $http.get('https://api.leancloud.cn/1.1/classes/ionictodo/'+id, {
          headers: {
            'x-avoscloud-application-id': LEANCLOUD_CREDENTIALS.APP_ID,
            'x-avoscloud-application-key': LEANCLOUD_CREDENTIALS.REST_API_KEY
          }
        });
      },
      create: function(data){
        return $http.post
        (
          'https://api.leancloud.cn/1.1/classes/ionictodo', data, {
            headers: {
              'x-avoscloud-application-id': LEANCLOUD_CREDENTIALS.APP_ID,
              'x-avoscloud-application-key': LEANCLOUD_CREDENTIALS.REST_API_KEY,
              'Content-Type':'application/json'
            }
          }
        );
      },
      edit: function(id, data){
        return $http.put
        ('https://api.leancloud.cn/1.1/classes/ionictodo/'+id, data, {
          headers: {
            'x-avoscloud-application-id': LEANCLOUD_CREDENTIALS.APP_ID,
            'x-avoscloud-application-key': LEANCLOUD_CREDENTIALS.REST_API_KEY,
            'Content-Type':'application/json'
          }
        })
      },
      delete: function(id){
        return $http.delete
        ('https://api.leancloud.cn/1.1/classes/ionictodo'+id,  {
          headers: {
            'x-avoscloud-application-id': LEANCLOUD_CREDENTIALS.APP_ID,
            'x-avoscloud-application-key': LEANCLOUD_CREDENTIALS.REST_API_KEY,
            'Content-Type':'application/json'
          }
        })
      }
    }
  }
]).value('LEANCLOUD_CREDENTIALS',{
  APP_ID : "lvwj1mpo0ikouhkwl956kwqbnegzj9y5nh6ybs4qx2vmyc4z",
  REST_API_KEY : "fhkv9jj22qsvmfmhtkj84mxzn5oytuw8fpb9vkywz9docpet"
})
