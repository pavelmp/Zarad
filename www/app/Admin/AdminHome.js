angular.module('zarad.admin',['ionic'])

.controller('AdminController',function($scope, $window, $location,Admin){
  $scope.admin={};
	$scope.club = {};
  $scope.tournament = {};

  //admin signup
  $scope.signup=function(){
    Admin.signup($scope.admin).then(function(resp){
      console.log(resp);
      $location.path('/AdminSignin');
    })
  }

  //admin sign in
  $scope.signin=function(){
    Admin.signin($scope.admin).then(function(resp){
      console.log(resp);
      $location.path('/AdminAction')
    })
  }

  //add club function
  $scope.Addclub =function(){
  	Admin.Addclub($scope.club)
  	.then(function(resp){
      console.log(resp.data);
      $location.path('/clubProfile');
    })
  }

  //add tournament function
  $scope.Addtournament =function(){
    //Admin.Addtournament($scope.tournament)
    //.then()

  }
})