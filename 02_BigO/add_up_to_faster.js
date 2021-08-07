// function addUpTo(n) {
//   console.log(n)
//   console.log(n+1)
//   console.log(n*(n+1))
//   return n * (n + 1) / 2;
// }

// var time1 = performance.now();
// console.log(addUpTo(1000000000));
// var time2 = performance.now();
// console.log(`Time Elapsed: ${(time2 - time1) / 1000} seconds.`)



var array1 = [1, 2, 3, 4, 6, 7, 8, 9]
var num = 37


// const insertIntoArray = (array, num) => {
//   var splicedArray = array.splice(num - 1)
//   console.log("insertIntoArray -> splicedArray", splicedArray)
//   console.log(array)
//   array.push(num)
//   for (let i = 0; i < splicedArray.length; i++) {
//     array.push(splicedArray[i])
//   }
// return array
// }


// console.log(insertIntoArray(array1, num))


const insert = (array, number) => {
array.push(number)
console.log("insert -> array", array)
array.sort(function(a, b){console.log(a), 
  console.log(b)
   return a - b})
console.log("insert -> array", array)
return array

}
console.log(insert(array1, num))



// var arr = [];
// arr[0] = "Jani";
// arr[1] = "Hege";
// arr[2] = "Stale";
// arr[3] = "Kai Jim";
// arr[4] = "Borge";

// console.log(arr.join());
// arr.splice(2, 0, "Lene");
// console.log(arr.join());