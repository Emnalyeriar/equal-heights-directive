(function () {
  'use strict';
  angular.module('equalHeights', []).directive('equalHeights', function(){
    return {
      restrict: 'A',
      controller: function ($scope, $element) {
        var content = $element[0].querySelectorAll("div[class^='col-']>*");
        var heights = [];
        var max = 0;
        this.setHeights = function() {
          angular.forEach(content, function (element) {
            heights.push(parseInt(window.getComputedStyle(element, null).getPropertyValue('height')));
          });
          max = Math.max.apply(Math, heights);
          angular.forEach(content, function (element) {
            element.style.height = max+'px';
          });
        };
        this.setHeights();
      }
    };
  });
})();
