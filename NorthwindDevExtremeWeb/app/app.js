var app = angular.module('app', ['ngRoute', 'dx']);

app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
          templateUrl: 'app/views/index.html',
          controller: 'homeCtrl'
      })
      .when('/product', {
          templateUrl: 'app/views/product.html',
          controller: 'productCtrl'
      })
    .when('/category', {
        templateUrl: 'app/views/category.html',
        controller: 'categoryCtrl'
    })
    .when('/chart', {
        templateUrl: 'app/views/chart.html',
        controller: 'chartCtrl'
    })
      //.when('/tags/:tagId', {
      //    templateUrl: '/partials/template2.html',
      //    controller: 'ctrl2'
      //})
      //.when('/another', {
      //    templateUrl: '/partials/template1.html',
      //    controller: 'ctrl1'
      //})
      .otherwise({ redirectTo: '/' });
});
