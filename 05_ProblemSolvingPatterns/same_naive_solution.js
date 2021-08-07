function same(arr1, arr2){
    //if the arrays are not equal length just end it 
    if(arr1.length !== arr2.length){
        return false;
    }

    //loop through the array 
    for(let i = 0; i < arr1.length; i++){
        //get the index of the squared value of the current arr1 value , 
        //if we are on iteration 1 arr1[i] = 1, so 1^2 = 1, so correct index would be arr2[1]
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        console.log("same -> correctIndex", correctIndex)

        //if the square of current arr1 value is not found return false
        if(correctIndex === -1) {
            return false;
        }
        //else splice the correct index out of the array and carryon, this accounts for the number of 2's in the first array being equal the the number of 2^2 in the 2nd array
        console.log(arr2);
        arr2.splice(correctIndex,1)

        //after the first iteration arr2 = [9,4,4]
        //because 1 got matched 
        console.log(arr2);
    }
    return true;
}

same([1,2,3,2], [9,1,4,4])

