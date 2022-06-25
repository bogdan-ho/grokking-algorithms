import selectionSort from "../../selectionSort/src/selectionSort.js";

const array1 = [1, 10, 5, 14, 6, 2];
const array1Sorted = array1.sort((a, b) => a - b);

test('selectionSort', () => {
  expect(selectionSort(array1)).toEqual(array1Sorted);
});