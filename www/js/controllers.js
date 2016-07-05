angular.module('ionictodo.controllers',[]).controller('TodoListController',['$scope','Todo',function($scope,Todo){

  Todo.getAll().success(function(data){
    $scope.items=data.results; // 这个scope是什么意思
  });

  $scope.onItemDelete = function(item){
    Todo.delete(item.objectId); //删除,这个是在modular里面定义todo的工厂模式
    $scope.items.splice($scope.items.indexOf(item),1);
  }
}]).controller('TodoCreationController',['$scope','Todo','$state',function($scope,Todo,$state){
  $scope.todo={};

  $scope.create=function(){ // 重载了create方法
    Todo.create({content:$scope.todo.content}).success(
      function(data){
        $state.go('todo'); //
      }
    );
  }
}]).controller('TodoEditController',['$scope','Todo','$state','$stateParams',function($scope,Todo,$state,$stateParams){

  $scope.todo={id:$stateParams.id, content:$stateParams.content};

  $scope.edit=function(){
    Todo.edit($scope.todo.id,{content:$scope.todo.content}).success(
      function(data){
        $state.go('todo');
      }
    )
  }
}]); // declare the controller as a chain, interesting
