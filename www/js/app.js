// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('ionictodo', ['ionic','ionictodo.controllers','ionictodo.services'])
.run(function($ionicPlatform,$rootScope,$state) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      // cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
    $state.go('todo');

    // update main view
    // $rootScope.updateMV = function() {
    //   console.log("current name", $state.current.name);
    //   if($state.current.name === 'todo') {
    //     $state.go('todo', {}, { reload: true });
    //   }
    // }

    // -- just to see our about => about state 'change'
    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){
      // console.log('toState:   ' + toState.name );
      // console.log('fromState: ' + (fromState.name || 'Just got there! click again!'));
      // console.log("chnage")
    })
  });
}).config(function($stateProvider){  // state provider a mechanims for the modular
  $stateProvider.state('todo',{
    url:'/todo',
    cache: false,
    controller:'TodoListController',
    templateUrl:'views/todo.html'
  }).state('createTodo',{
    url:'/todo/new',
    controller:'TodoCreationController',
    templateUrl:'views/create-todo.html'
  }).state('editTodo',{
    url:'/todo/edit/:id/:content',
    controller:'TodoEditController',
    templateUrl:'views/edit-todo.html'
  })
})
