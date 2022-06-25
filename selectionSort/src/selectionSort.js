import findIndexOfSmallest from "./findIndexOfSmallest";

const selectionSort = (array) => {
  const size = array.length;
  let arrayPrevious = [...array];
  const newArr = [];

  for (let i = 0; i < size; i += 1) {
    const indexOfSmallest = findIndexOfSmallest(arrayPrevious);
    newArr.push(arrayPrevious[indexOfSmallest]);
    arrayPrevious.splice(indexOfSmallest, 1);
  }
  return newArr;
};

export default selectionSort;