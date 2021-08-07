const pivot = (arr, start = 0, end = arr.length - 1) => {

    //swap helper function
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };

    //pour pivotIndex starts at 0
    let pivotIndex = start
    //our pivot point is in position 0
    let pivot = arr[start]

    //loop though the array, dont need to start at 0 because thats what we are comparing it too
    for (let i = start + 1; i < arr.length; i++) {

        //if the pivot point is greater than the current array value , increase the pivot index, and move the current array value to the left of the pivot value
        if (pivot > arr[i]) {
            // console.log("=====IF=====")
            // console.log(arr) 
            pivotIndex++
            swap(arr, pivotIndex, i);
            // console.log(arr)

        }
    }

    // console.log(pivotIndex)
    // console.log(arr)
    //here we would have [5,1,3,7] 
    //at the end swap our pivot point with the position it will be cemented in, will be able to create the left and right sides on the quick sort
    swap(arr, pivotIndex, start)
    return pivotIndex
    // console.log(arr)
}

//pivot([5,1,7,3])
let count = 0
function quickSort(arr, left = 0, right = arr.length - 1) {
    count++
    console.log(left, right)
    if (left < right) {
        console.log("===========" + count + "================")
        
        let pivotIndex = pivot(arr, left, right) //3
        console.log(arr[pivotIndex])
        console.log(arr)
        //left, here we pass in pivot index -1 as the right param so we only handle the left side of the pivotPoint
        quickSort(arr, left, pivotIndex - 1);
        //right here we pass in pivot index +1 as the left param so we only handle the right side of the pivotPoint
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
}

console.log(quickSort([100, -3, 2, 4, 6, 9, 1, 2, 5, 3, 23]))