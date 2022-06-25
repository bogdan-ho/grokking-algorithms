import findIndexOfSmallest from "../../selectionSort/src/findIndexOfSmallest.js";

const array1 = [11, 3, 10, 4, 5, 2, 9, 15];
const array2 = [11, 1, 3, 10, 4, 5, 2, 9, 15];

test('findIndexOfSmallest', () => {
  expect(findIndexOfSmallest(array1)).toBe(5);
  expect(findIndexOfSmallest(array2)).toBe(1);
});