(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoryController', CategoryController);

CategoryController.$inject = [];
function CategoryController() {
  var menu = this;
  console.log("CategoryController");

}

})();
