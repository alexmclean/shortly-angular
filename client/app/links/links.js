angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  // make links clickable, store links, increment count, and add links
  Links.getLinks()
  .then(function(x){
    console.log(x);  
    $scope.links = x;
  });
});
