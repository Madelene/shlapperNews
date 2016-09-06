angular.module('schlapperNews', ['ui.router'])

.config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('home');

    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: '/home.html',
        controller: 'MainCtrl'
      })
      .state('posts', {
        url: '/posts/{id}',
        templateUrl: '/posts.html',
        controller: 'PostsCtrl'
      });
    }])

.factory('posts', [function(){
  var o = {
    posts: []
  };
    return o;
}])

.controller('MainCtrl', [
'$scope',
'posts',
function($scope, posts){
  $scope.test = "Maddie's first Angular app!"; // declares a variable called "test"
  $scope.posts = posts.posts;

 $scope.addPost = function(){
  if(!$scope.title || $scope.title === '') { return; }
  $scope.posts.push({
    title: $scope.title,
    link: $scope.link,
    upvotes: 0
  });
  $scope.title = '';
  $scope.link = '';
 };

 $scope.incrementUpvotes = function(post) {
   post.upvotes += 1;
 };

}])
.controller('PostsCtrl', [
'$scope',
'$stateParams',
'posts',
function($scope, $stateParams, posts) {

}]);


