function selectionSort(arr) {
    let newArr = [];

    while(arr.length) {
        const smallest = Math.min(...arr);
        const smallestIndex = arr.indexOf(smallest);
                
        newArr.push(smallest);    
        arr.splice(smallestIndex, 1);
    }
    return newArr;
}

selectionSort([5,3,6,2,10]);