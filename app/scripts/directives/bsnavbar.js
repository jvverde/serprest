'use strict';

/**
 * @ngdoc directive
 * @name serprestApp.directive:bsNavbar
 * @description
 * # bsNavbar
 */
angular.module('serprestApp')
  .directive('bsNavbar', ['$location', function ($location){
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        var menu = [];
        angular.forEach(element.find('li>a'), (function (a) {
          var $a = angular.element(a);
          var link = ($a.attr('ng-href') || '').replace(/^#/,'');
          menu.push({regex:new RegExp('^' +  link + '$', 'i'),parent:$a.parent()});
        }));

        scope.$watch(function () {
          return $location.path();
        }, function (path) {
          angular.forEach(menu,function(m){
            m.parent.toggleClass('active', m.regex.test(path));
          })         
        });
      }
    };
  }]);
