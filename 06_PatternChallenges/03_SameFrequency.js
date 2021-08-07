function sameFrequency(n1, n2) {
    //convert numbers to array
    const n1Arry = Array.from(n1.toString()).map(Number);
    // console.log("sameFrequency -> n1Arry", n1Arry)
    const n2Arry = Array.from(n2.toString()).map(Number);
    // console.log("sameFrequency -> n2Arry", n2Arry)


    if (n1Arry.length !== n2Arry.length) {
        console.log("different lengths " + n1Arry.length + " vs  " + n2Arry.length)
        return false
    }

    let n1Object = {}
    let n2Object = {}

    // convert both arrays ot objects
    for (let num of n1Arry) {
        n1Object[num] = n1Object[num] ? n1Object[num] + 1 : 1
    }

    //different example of object to array conversion
    for (let i = 0; i < n2Arry.length; i++) {
        n2Object[n2Arry[i]] = n2Object[n2Arry[i]] ? n2Object[n2Arry[i]] + 1 : 1
    }

    // console.log(n1Object)
    // console.log(n2Object)


    //compare the objects
    for (let key in n1Object) {
        //if the key does not appear in n2Object then return false cause the numbers cannot have the same frequency if n1Object has a 5 and n2Object does not then they cannot possibly have equal frequency of numbers
        if (!(key in n2Object)) {
            console.log("different keys" + key)
            return false
        }

        //second comparison we compare the frequency of each number 

        //if the value of key 1 in object 1 and the value of key 2 in object 2 do not match then they dont have the same frequency so return false
        if (n1Object[key] !== n2Object[key]) {
            console.log('different frequencies for key' + key)
            return false
        }

    }
    // console.log(true)
    return true

}


console.log(sameFrequency(182, 281))
console.log(sameFrequency(34, 14))
console.log(sameFrequency(3589578, 5879385))
console.log(sameFrequency(22, 222))
console.log(sameFrequency(2242, 2442))



