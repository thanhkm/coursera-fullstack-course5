(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/templates/home.template.html'
  })

  // categories
  .state('categories', {
    url: '/categories',
    templateUrl: 'src/templates/categories.template.html'
    // controller: 'CategoryController as category',
    // resolve: {
    //   items: ['MenuDataService', function (MenuDataService) {
    //     return MenuDataService.getAllCategories();
    //   }]
    // }
  })

  // items
  .state('items', {
    url: '/items',
    templateUrl: 'src/templates/items.template.html'
    // controller: 'ItemDetailController as itemDetail',
    // params: {
    //   itemId: null
    // }
  });

}

})();
