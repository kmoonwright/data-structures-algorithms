function binarySearch(array, target) {
    if (array.length === 0) return false;

    const midPoint = Math.floor(array.length / 2);
    const midEle = array[midPoint];

    if (target === midEle){
        return true;
    } else if (target < midEle){
        return binarySearch(array.slice(0, midPoint), target);
    } else {
        return binarySearch(array.slice(midPoint + 1), target);
    }
}

function binarySearchIndex(array, target) {
    if (array.length === 0) return -1;

    const midPoint = Math.floor(array.length / 2);
    const midEle = array[midPoint];

    if (target === midEle) {
        return midPoint;
    } else if (target < midEle) {
        return binarySearchIndex(array.slice(0, midPoint), target);
    } else {
        const result = binarySearchIndex(array.slice(midPoint + 1), target);
        if (result < 0){
            return -1;
        } else {
            return midPoint + 1 + result;
        }
    }
}



// GIVEN SOLUTION
function binarySearch(array, target) {
    if (array.length === 0) {
        return false;
    }

    let midIdx = Math.floor(array.length / 2);
    let leftHalf = array.slice(0, midIdx);
    let rightHalf = array.slice(midIdx + 1);

    if (target < array[midIdx]) {
        return binarySearch(leftHalf, target);
    } else if (target > array[midIdx]) {
        return binarySearch(rightHalf, target);
    } else {
        return true;
    }
}

function binarySearchIndex(array, target, lo = 0, hi = array.length - 1) {
    if (lo === hi) {
        return -1;
    }

    let midIdx = Math.floor((lo + hi) / 2);

    if (target < array[midIdx]) {
        return binarySearchIndex(array, target, lo, midIdx);
    } else if (target > array[midIdx]) {
        return binarySearchIndex(array, target, midIdx + 1, hi);
    } else {
        return midIdx;
    }
}




module.exports = {
    binarySearch,
    binarySearchIndex
};