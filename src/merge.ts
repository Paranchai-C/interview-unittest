export function merge(collection1: number[], collection2: number[], collection3: number[]): number[] {
  const combinedArray = collection1.concat(collection2, collection3);
  return mergeSort(combinedArray);
}

function mergeSort(unsortedArray: number[]): number[] {
  // already sorted
  if (unsortedArray.length <= 1) {
    return unsortedArray;
  }

  // divide into halves
  const middle = Math.floor(unsortedArray.length / 2);
  const left = unsortedArray.slice(0, middle);
  const right = unsortedArray.slice(middle);

  // recursively sort sub-arrays
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  return mergeTotal(sortedLeft, sortedRight);
}

function mergeTotal(left: number[], right: number[]): number[] {
  // optimized result array creation
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  // Compare and merge elements
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}