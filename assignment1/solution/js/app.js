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
    if (nbMeals === 0) {
      $scope.message = "Nothing!";
    } else if (nbMeals <= 3) {
      $scope.message = "Enjoy!";
    } else {
      $scope.message = "Too much!";
    }
  }

}


})();
