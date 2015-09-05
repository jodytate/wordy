(function(){
  'use strict';

  angular.module('wordyApp', [])

  .controller('WordyController', function ($scope) {

    $scope.words = [];

    $scope.wordy = function (word) {
      var rearrangedWord;
      var head;
      var tail;

      if (!word) {
        return $scope.words;
      }

      function rearrange(str, prefix) {
        prefix = prefix || '';

        str.split('').map(function(head, idx) {
          tail = str.slice(0, idx) + str.slice(idx + 1);
          rearrangedWord = prefix + head + tail;

          if ($scope.words.indexOf(rearrangedWord) < 0) {
            $scope.words.push(rearrangedWord);
          }

          if (tail.length > 1) {
            rearrange(tail, prefix + head);
          }
        });
      }

      rearrange(word, '');
      return $scope.words;
    };

    $scope.clearWordList = function () {
      $scope.words = [];
    };

  });

})();
