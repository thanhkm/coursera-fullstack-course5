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
    templateUrl: 'src/templates/main-categories.template.html',
    controller: 'CategoryController as category'
    // resolve: {
    //   categories: ['MenuDataService', function (MenuDataService) {
    //     var categories = MenuDataService.getAllCategories();
    //     console.log(categories);
    //     return categories;
    //   }]
    // }
  })

  // items
  .state('items', {
    url: '/items/{categoryShortName}',
    templateUrl: 'src/templates/main-items.template.html',
    controller: 'ItemController as itemCtrl'
    // params: {
    //   itemId: null
    // }
  });

}

})();
