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
