const findLongestWord = function(string) {
  let largestWord = '';
  const stringSplit = string.split(' ');
  for (const word of stringSplit) {
    if (largestWord.length < word.length) {
      largestWord = word;
    }
  }
  return largestWord;
};

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'
