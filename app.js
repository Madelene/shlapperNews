angular.module('shlapperNews', [])
.controller('MainCtrl', [
'$scope',
function($scope){
  $scope.test = "Maddie's first Angular app!"; // declares a variable called "test"
  $scope.posts = [  // new scope variable called "posts"
  {title: 'post 1', upvotes: 5},
  {title: 'post 2', upvotes: 2},
  {title: 'post 3', upvotes: 15},
  {title: 'post 4', upvotes: 9},
  {title: 'post 5', upvotes: 4}
 ];

 $scope.addPost = function(){
  $scope.posts.push({title: 'This is my new post', upvotes: 0});
 };
}]);


