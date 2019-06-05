(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
.directive('foundItems', FoundItemsDirective);

function FoundItemsDirective() {
  var ddo = {
    templateUrl: 'narrowList.html',
    scope: {
      items: '<',
      onRemove: '&',
      msg: '@'
    },
    controller: FoundItemsDirectiveController,
    controllerAs: 'list',
    bindToController: true
  }

  return ddo;
}

function FoundItemsDirectiveController() {
  var list = this;
  console.log(this);
}




NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var menu = this;
  menu.searchTerm = "";
  menu.msg = "";


  menu.search = function () {
    if (menu.searchTerm === "") {
      menu.msg = "Nothing found";
      return;
    }

    var promise = MenuSearchService.getMatchedMenuItems(menu.searchTerm);
    promise.then(function (response) {
      menu.items = response;

      if (menu.items.length === 0) {
        menu.msg = "Nothing found";
      } else {
        menu.msg = "";
      }

      console.log(menu.msg);
      console.log(response);
    })
    .catch(function (error) {
      console.log("Something went terribly wrong.");
    });
  };

  menu.removeItem = function (itemIndex) {
    console.log("removeItem: " + itemIndex);
    menu.items.splice(itemIndex, 1);
  }

}


MenuSearchService.$inject = ['$http', 'ApiBasePath']
function MenuSearchService($http, ApiBasePath) {
  var service = this;


  service.getMatchedMenuItems = function (searchTerm) {
    return $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json")
    })
    .then(function (response) {
      var foundItems = [];
      var items = response.data.menu_items
      for (var i = 0; i < items.length; i++) {
        var item = items[i];
        if (item.description.includes(searchTerm)) {
          foundItems.push(item);
        }
      }
      return foundItems;
    });
  }

}


})();
