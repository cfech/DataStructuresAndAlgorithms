function areThereDuplicates(...args) {
    if (args <= 1) {
        return false
    }
    console.log(args)

    const obj = {}

    //turn array to object
    for (let val of args) {
        obj[val] = (obj[val] || 0) + 1
    }

    //check if a key has a value greater than 1, denoting multiple values
    for (let key in obj) {
        if (obj[key] > 1) {
            console.log(key)
            return true
        }
    }

    return false
}

console.log(areThereDuplicates(1, 2, 2))
console.log(areThereDuplicates("a", "b", "c", "a"))

//solved with pointers 
function areThereDuplicates(...args) {
    // Two pointers

    //sort the array
    args.sort((a,b) => a > b);
    let start = 0;
    let next = 1;

    
    while(next < args.length){
      if(args[start] === args[next]){
          return true
      }

      //move up 1 each time
      start++
      next++
    }
    return false
  }

  //one line solution

  function areThereDuplicates() {
    return new Set(arguments).size !== arguments.length;
  }