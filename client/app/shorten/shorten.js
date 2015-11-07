angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.shortenLink = function () {
    var text = $scope.text;
    Links.postLink(text);
    $scope.text = "";
  };
});
