const mergeArrays = (arr1, arr2) => {
    let finalArray = []
    let i = 0;
    let j = 0;


    //works until we hit the end of one of the arrays
    while(i< arr1.length && j<arr2.length){
        if(arr1[i]<= arr2[j]){
            // console.log(arr1[i], arr2[j])
            finalArray.push(arr1[i])
            i++
        }else{
            // console.log("else")
            // console.log(arr1[i], arr2[j])
            finalArray.push(arr2[j])
            j++
        }
    }



//takes care of whatever array has values left over after we finish the first one
    while(j < arr2.length){
        // console.log("arr2 while pushing:" + arr2[j])
        finalArray.push(arr2[j])
        j++
    }
    while(i < arr1.length){
        // console.log("arr1 while pushing:" + arr1[j])
        finalArray.push(arr1[i])
        i++
    }


    return finalArray

}

let array1 = [1,2,5,34]
let array2 = [5,13,17,59,77]

// console.log(mergeArrays(array1, array2))

//param and count just for console log purposes
let count = 0
function mergeSort(arr, param){
    count++
    console.log( param + ": run through #" +count + " arry -> " +arr)
    if(arr.length <= 1){
        console.log("returned " + arr)
      return arr;  
    } 
    
    let mid = Math.floor(arr.length/2);
    
    ///if we have an array of [4,2,7,1], left will turn into [4,2], and merge sort will then be recursively called (2 more times in this example) until left is set = [2,4] 
    let left = mergeSort(arr.slice(0,mid), "left");

    //here our right would be [7,1 ]and merge sort will then be recursively called (2 more times in this example) until right is set = [1,7]
    let right = mergeSort(arr.slice(mid), "right");

    //then our mergeArray will put them together into [1,2,4,7] and return that array
    return mergeArrays(left, right);
}


console.log(mergeSort([2,5,3,12,9], "start"))