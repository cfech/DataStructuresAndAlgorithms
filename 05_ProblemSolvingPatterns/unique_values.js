// function countUniqueValues(arr){
//     if(arr.length === 0) return 0;
//     var i = 0;
//     for(var j = 1; j < arr.length; j++){
//         if(arr[i] !== arr[j]){
//             i++;
//             arr[i] = arr[j]
//         }
//     }
//     return i + 1;
// }

//o(N) time because only 1 loop



//myImplementation

function countUniqueValues(arr){
    
    //if nothing in the array there are no unique values 
    if(arr.length  === 0){
        return 0
    }

    //our first pointer
    var count = 0

    //i is our second pointer, starts at array 1 and advanced down the line until the value is not the same as that in array[count]
    for (let i = 1; i< arr.length;  i++){
        if (arr[count] !== arr[i]){
            //move count over 1 
            count++; 
            //insert the current value of i at the current value of count to build a list of unique values at the beginning of the array
            arr[count] = arr[i]
            console.log(arr)
        }
    }
    return count +1

}


console.log(countUniqueValues([1,2,2,5,7,7,99]))

