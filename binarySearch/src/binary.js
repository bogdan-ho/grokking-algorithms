// function gets sorted array, value for search and returns index of value for search. In case value not found returns null
const binarySearch = (array, value) => {
  let low = 0;
  let high = array.length - 1;

  while (low <= high) {
    const middleIndex = Math.floor((low + high) / 2);
    const guess = array[middleIndex];

    if (guess === value) return middleIndex;
    if (guess > value) {
      high = middleIndex - 1;
    } else {
      low = middleIndex + 1;
    }
  }
  return null;
};


//binarySearch function testing

const myArray = [1, 3, 5, 7, 9, 11, 13, 15];

console.log(binarySearch(myArray, 13)); // 6
console.log(binarySearch(myArray, 1));  // 0
console.log(binarySearch(myArray, -5)); // null
console.log(binarySearch(myArray, 60)); // null