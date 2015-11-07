angular.module('shortly.links', [])


.controller('LinksController', function ($scope, $location, Links) {
  // Your code here
  // make links clickable, store links, increment count, and add links
  Links.getLinks ()
  .then(function (x) {
    $scope.data = x;
  });

  $scope.handleClick = function (ind) {
    console.log($location);
    // $location.url('/api/links/' + this.data[ind].code);
    window.location.href = "http://localhost:3000/api/links/" + $scope.data[ind].code;
  };
});
