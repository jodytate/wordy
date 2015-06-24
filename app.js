(function(){
  'use strict';

  angular.module('wordyApp', [])

  .controller('WordyController', function ($scope) {

    $scope.wordy = function (str) {
      var fn = function(active, rest, stuff) {
          if (!active && !rest)
              return;
          if (!rest) {
              if (active.length > 1 && active.match(/[aeiouAEIOU]/)) {
               stuff.push(active);
              }
          } else {
              fn (active + rest[0], rest.slice(1), stuff);
              fn (active, rest.slice(1), stuff);
          }
          return stuff;
      };
      $scope.words = fn ('', str, []);
    };

  });

})();
