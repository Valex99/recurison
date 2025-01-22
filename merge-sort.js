// Merge sort
let arr = [3, 2, 1, 13, 8, 5, 0, 1];

let arr1 = [6];

function mergeSort(arr) {
  if (arr.length <= 1) {
    console.log("Array already sorted");
    return arr;
  } else {
    // 1. Dividing the array into two halves.
    const half = arr.length / 2;
    const left = arr.slice(0, half);
    const right = arr.slice(half);

    //	2.	Recursively sorting each half.
    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);

    //	3.	Merging the two sorted halves into a single sorted array.
    let i = 0;
    let j = 0;
    const mergedArray = [];

    while (i < sortedLeft.length && j < sortedRight.length) {
      if (sortedLeft[i] < sortedRight[j]) {
        mergedArray.push(sortedLeft[i]);
        i++;
      } else {
        mergedArray.push(sortedRight[j]);
        j++;
      }
    }

    // Add remaining elements from the left or right array
    while (i < sortedLeft.length) {
      mergedArray.push(sortedLeft[i]);
      i++;
    }

    while (j < sortedRight.length) {
      mergedArray.push(sortedRight[j]);
      j++;
    }

    return mergedArray;
  }
}

console.log(mergeSort(arr)); // [1, 2, 3, 4, 5, 6, 7, 8]
//console.log(mergeSort(arr1));
