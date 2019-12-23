// This function calls itsel until has resolved all items in array
function sumUp(arr, nextPosition = 0, count = 0) {
    if (nextPosition === arr.length) return count;
    else {
        count += arr[nextPosition];
        nextPosition += 1;
        return sumUp(arr, nextPosition, count);
    }
}

function countUp(arr, nextPosition = 0) {
    if(nextPosition === arr.length) return nextPosition;
    else return countUp(arr, ++nextPosition);
}

function findMaximum(arr, nextPosition = 0, maximum = null) {
    if (nextPosition === arr.length) return maximum;
    else {
        if(arr[nextPosition] > maximum) maximum = arr[nextPosition]; 
        return findMaximum(arr, ++nextPosition, maximum);
    }
} 

// const result = sumUp([1,2,3,4,5]);
// console.log(result);

// const countResult = countUp([1,2,3,4,5,0]);
// console.log(countResult);

// const maximumResult = findMaximum([1,4,5,6,10,23, 4, 4]);
// console.log(maximumResult);
