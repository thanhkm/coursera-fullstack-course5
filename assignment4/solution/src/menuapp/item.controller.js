(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemController', ItemController);

ItemController.$inject = ['$stateParams','MenuDataService'];
function ItemController($stateParams, MenuDataService) {
  var itemCtrl = this;

  console.log("ItemController: ", this);
  itemCtrl.categoryShortName = $stateParams.categoryShortName
  console.log(itemCtrl.categoryShortName)

  var promise = MenuDataService.getItemsForCategory(itemCtrl.categoryShortName);
  promise.then(function (response) {
    var data = response.data;
    itemCtrl.category = data.category;
    itemCtrl.items = data.menu_items;
    console.log(data);
  })
  .catch(function (error) {
    console.log("Something went terribly wrong.");
  });

}

})();
