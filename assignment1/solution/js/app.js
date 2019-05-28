(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController ($scope) {
  $scope.dishes = "";
  $scope.message = "";

  $scope.DishesCheck = function () {
    var meals = $scope.dishes.split(',');
    var nbMeals = meals.length;
    if ($scope.dishes === "") {
      $scope.message = "Please enter data first";
      
    } else if (nbMeals <= 3) {
      $scope.message = "Enjoy!";
    } else {
      $scope.message = "Too much!";
    }
  }

}


})();
