// // Original Solution
// function binarySearch(arr, elem) {
//     var start = 0;
//     var end = arr.length - 1;
//     var middle = Math.floor((start + end) / 2);
//     while(arr[middle] !== elem && start <= end) {
//         if(elem < arr[middle]){
//             end = middle - 1;
//         } else {
//             start = middle + 1;
//         }
//         middle = Math.floor((start + end) / 2);
//     }
//     if(arr[middle] === elem){
//         return middle;
//     }
//     return -1;
// }

// // Refactored Version
// function binarySearch(arr, elem) {
//     var start = 0;
//     var end = arr.length - 1;
//     var middle = Math.floor((start + end) / 2);
//     while(arr[middle] !== elem && start <= end) {
//         if(elem < arr[middle]) end = middle - 1;
//         else start = middle + 1;
//         middle = Math.floor((start + end) / 2);
//     }
//     return arr[middle] === elem ? middle : -1;
// }

//------my implimentation

function binarySearch(a, value) {
    let arr = a.sort((a, b) => a - b)
    console.log(arr)
    let start = 0
    let end = arr.length - 1

    let middle = Math.floor((start + end) / 2)

    while (arr[middle] !== value && start <= end) {
        console.log(middle)
        console.log(arr[middle])
        if (arr[middle] === value) {
            return middle
        }
        else if (value < arr[middle]) {
            end = middle - 1

        } else {
            start = middle + 1
        }

        middle = Math.floor((start + end) / 2)
        
    }
    if (arr[middle] === value) {
            return middle
        }
    return -1


}
// let numArray = [2, 5, 6,2,4]

// numArray.sort(function(a, b) {
//     console.log("==============")
//     console.log("a: " + a)
//     console.log("b: " + b)
//     console.log(numArray)
//     console.log("==============")
//     return a - b;
//   });

//   console.log(numArray)


//console.log("index: " + binarySearch([2, 5, 6, 2, 4, 5, 6, 1, 3, 53, 2, 123, 434, 9, 13, 15, 28, 30], 15))

console.log("index: " + binarySearch([1,2,3,4,5 ], 3))
































