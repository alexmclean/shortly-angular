angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  // make links clickable, store links, increment count, and add links
  Links.getLinks ()
  .then(function (x) {
    $scope.data = x;
  });

  $scope.handleClick = function (ind) {
    console.log(this.data[ind]);
    this.data[ind].visits++;
  };
});
