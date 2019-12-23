function quickSort(arr) {
    if (arr.length < 2) return arr;
    else {
        const pivot = arr[0];
        const less = arr.filter(item => item < pivot);
        const greater = arr.filter(item => item > pivot);
        
        return quickSort(less).concat(pivot).concat(quickSort(greater));
    }
}

console.log(quickSort([10,5,2,3,11]));
