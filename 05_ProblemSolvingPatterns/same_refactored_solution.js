function same(arr1, arr2){
    //if not the sam length return false
    if(arr1.length !== arr2.length){
        return false;
    }


    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    
    //make the key with the val and the value is either itself+1 if that key already exists or sets it to 0 +1 which is 1
    for(let val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    
    
      //make the key with the val and the value is either itself+1 if that key already exists or sets it to 0 +1 which is 1
    for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1        
    }
    console.log(frequencyCounter1);
    console.log(frequencyCounter2);
    
    //here we loop through each key in frequency counter 
    for(let key in frequencyCounter1){
        //we say if the key ^2  is a key in the 2nd object 
        if(!(key ** 2 in frequencyCounter2)){
            return false
        }

        //here we check if there are 2 2s we need 2 4s
        //if(4 : value  !== 2: value)
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false
        }
    }
    return true
}

console.log(same([1,2,3,2,5],  [9,1,4,4,25]))
