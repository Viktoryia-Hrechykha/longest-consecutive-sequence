module.exports = function longestConsecutiveLength(array) {
  let sortedArray = [];
  let sequences = [];
  let prev = 0;
  let maxLength = 1;

  if (!array.length) return 0;

  if (array.length === 1) return 1;

  array.forEach((el) => {
      if (el > sortedArray[sortedArray.length - 1]) {
          sortedArray.push(el)
      } else {
          sortedArray.splice(sortedArray[sortedArray.length - 2], 0, el)
      }
  });

  sortedArray.forEach((el) => {
      if (el - prev !== 1) sequences.push([]);
      sequences[sequences.length - 1].push(el);
      prev = el;
  });

  for (let i = 0; i < sequences.length; i++) {
      if (sequences[i - 1] && sequences[i].length > sequences[i - 1].length && sequences[i].length > maxLength) maxLength = sequences[i].length;
  }

  return maxLength;
};