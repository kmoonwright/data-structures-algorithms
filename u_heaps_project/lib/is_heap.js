// you may assume that the array will always have a null element at the 0-th index

// EX: [null, 42, 32, 24, 30, 9, 20, 18, 2, 7]

// expect(isMaxHeap( [null, 10, 5, 7, 2, 6] )).to.equal(false);

function isMaxHeap(array, idx = 1) {
    
  for(idx + 1; idx < array.length - 1; idx++) {
    let leftChild = array[idx * 2];
    let rightChild = array[idx * 2 + 1];
    if(array[idx] > array[1] || array[idx] < leftChild || array[idx] < rightChild) return false;
  }

  return true;
}

// function isMaxHeap(array, idx = 1) {
//   if (array[idx] === undefined) return true;
//   let leftIdx = 2 * idx;
//   let rightIdx = 2 * idx + 1;
//   let leftVal = array[leftIdx] === undefined ? -Infinity : array[leftIdx];
//   let rightVal = array[rightIdx] === undefined ? -Infinity : array[rightIdx];
//   return array[idx] > leftVal && array[idx] > rightVal
//     && isMaxHeap(array, leftIdx) && isMaxHeap(array, rightIdx);
// }


module.exports = {
    isMaxHeap
};