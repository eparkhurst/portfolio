angular.module('Portfolio')
  .controller("HomeController", function($scope){
    $scope.phrase="This Works!!"
    $scope.tc = false
    $scope.toggle = function(){
      $scope.tc = !$scope.tc;
      console.log("hit");
    }
  })
  .controller("DetailController", function($scope){
    $scope.phrase="This Works!!"
  })
