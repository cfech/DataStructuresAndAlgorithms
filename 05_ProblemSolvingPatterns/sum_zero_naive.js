
//naive solution w/ O(n^2)
// function sumZero(arr){
//     for(let i = 0; i < arr.length; i++){
//         for(let j = i+1; j < arr.length; j++){
//             if(arr[i] + arr[j] === 0){
//                 return [arr[i], arr[j]];
//             }
//         }
//     }
// }


//this whole pointer system depends on the array being sorted
//refactored with pointers 
function sumZero(arr){

    let left = 0;


let right = arr.length -1;

while(left < right){
    let sum = arr[left] + arr[right]

    if(sum ===0){
        return [arr[left], arr[right]]
    }else if (sum > 0){// ie -4 + 10 , must move right pointer to the left because there is not match for 10
        right --
    }else { //sum < 0 , ie -4 + 3, must move left pointer to the right because there is no match for -4
        left++
    }
}
}


console.log(sumZero([-4,-3,-2,-1,0,1,2, 3, 10]))