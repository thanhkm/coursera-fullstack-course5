(function () {
'use strict';

angular.module('MenuApp')
.controller('MenuAppController', MenuAppController);

MenuAppController.$inject = ['MenuDataService'];
function MenuAppController(MenuDataService) {
  var menu = this;

  var promise = MenuDataService.getMenuCategories();

  promise.then(function (response) {
    menu.categories = response.data;
    console.log(menu.categories);
  })
  .catch(function (error) {
    console.log("Something went terribly wrong.");
  });

}

})();
