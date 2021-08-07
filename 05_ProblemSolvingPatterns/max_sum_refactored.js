function maxSubarraySum(arr, num){
  let maxSum = 0;
  let tempSum = 0;

  //edge case
  if (arr.length < num) return null;

  // create the sum of the 1st 3 numbers, 2+6+9
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  //store that sum here
  tempSum = maxSum;

  //for the rest of the array we will subtract the 1st number and add the next number, so -2, +2, (6+9+2), next iteration, -6, +1, so (9+2+1), next -9, +8 so (2 +1 +8), and so on until the end of the array, the "window slides to the right"
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];

    //each time compare the new sum to the old sum 
    maxSum = Math.max(maxSum, tempSum);
  }
  
  return maxSum;
}

maxSubarraySum([2,6,9,2,1,8,5,6,3],3)
