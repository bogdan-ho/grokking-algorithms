const findIndexOfSmallest = (array) => {
  let smallest = array[0];
  let smallestIndex = 0;

  for (let i = 0; i < array.length; i += 1) {
    if (array[i] < smallest) {
      smallest = array[i];
      smallestIndex = i;
    }
  }

  return smallestIndex;
};

export default findIndexOfSmallest;