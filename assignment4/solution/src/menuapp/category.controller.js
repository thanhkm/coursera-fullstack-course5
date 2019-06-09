(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoryController', CategoryController);

CategoryController.$inject = ['MenuDataService'];
function CategoryController(MenuDataService) {
  var menu = this;

  console.log("CategoryController: ", this);

  var promise = MenuDataService.getAllCategories();
  promise.then(function (response) {
    menu.categories = response.data;
    console.log(menu.categories);
  })
  .catch(function (error) {
    console.log("Something went terribly wrong.");
  });

}

})();
