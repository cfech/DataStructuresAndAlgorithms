// function validAnagram(first, second) {
//   if (first.length !== second.length) {
//     return false;
//   }

//   const lookup = {};

//   for (let i = 0; i < first.length; i++) {
//     let letter = first[i];
//     // if letter exists, increment, otherwise set to 1
//     lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
//   }
//   console.log(lookup)

//   for (let i = 0; i < second.length; i++) {
//     let letter = second[i];
//     // can't find letter or letter is zero then it's not an anagram
//     if (!lookup[letter]) {
//       return false;
//     } else {
//       lookup[letter] -= 1;
//     }
//   }

//   return true;
// }

// {a: 0, n: 0, g: 0, r: 0, m: 0,s:1}
//validAnagram('anagrams', 'nagaramm')


//-------------------MY SOLUTION -============
const validAnagram = (a1, a2) => {
  if(a1.length !== a2.length){
    return false
  }
let anagram1 = {}

let anagram2 = {}
for (let val of a1){
  anagram1[val] = anagram1[val] ? anagram1[val] += 1 : 1
}

for (let val of a2){
  anagram2[val] = anagram2[val] ? anagram2[val] += 1 : 1
}


console.log(anagram1)
console.log(anagram2)

for (let key in anagram1){
  
  if(!(key in anagram2)){
    console.log("failed for corresponding keys" )
    return false
  }

  if(anagram1[key] !== anagram2[key]){
    console.log("failed for corresponding values" )
    return false
  }
}



return true


}



//fails for keys
console.log(validAnagram('sanagram', 'nagaramm'))


//fails for values 
console.log(validAnagram('football', 'fobatool'))


//passes
console.log(validAnagram('football', 'fobatlol'))

console.log(validAnagram('texttwisttime', 'timetwisttext'))








