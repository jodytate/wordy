(function(){
  'use strict';

  angular.module('wordyApp', [])

  .controller('WordyController', function ($scope, $http) {

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


    $scope.intersection = [];

    $scope.isItAWord = function (words) {
      console.log(words);
      $http.get('data/wordlist.txt')
        .success(function(data){
          // var wordlist = data.split('\n');
          // console.log(wordlist)
          // console.log(words)
          // // $scope.wordlist = wordlist;
          // var intersection = _.intersection(words, wordlist);
          // console.log(intersection);
          // $scope.intersection = _.intersection(words, wordlist);

          $scope.intersection = _.intersection(['foo', 'bar'], ['foo', 'fozzie'])

        });
    };



  });

})();
