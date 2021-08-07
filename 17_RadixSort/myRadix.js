
//helper methods

//returns the digit at the given place, (comes from the back)
function getDigit(num, place) {
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

//will return 9
// console.log(getDigit(789, 0))


//returns the length of a digits
function digitCount(num) {
    if (num === 0) return 1;

    //returns absolute value taking care fo any negative numbers

    // console.log(Math.abs(num))

    //returns the base 10 log of the number, (1 less than how many digits the number is ), so we add 1

    // console.log(Math.log10(num))

    return Math.floor(Math.log10(Math.abs(num))) + 1;

    //my own thought process
    // let stringDigit = Math.floor(Math.abs(num)).toString()
    // return stringDigit.length 
}

// console.log(digitCount(12.765))


//returns the maximum digits of a number in our array
function mostDigits(nums) {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));

        // console.log(maxDigits)
    }
    return maxDigits;
}

let nums = [13, 2, 1243]
// console.log(mostDigits(nums))


let radix = (nums) => {
    let max = mostDigits(nums)

    for (let k = 0; k <= max; k++) {
        //create the buckets 
        let digitBuckets = Array.from({ length: 10 }, () => []);

        console.log("digitBuckets -> " + digitBuckets)
        
        //inserts the numbers into respective buckets
        for (let i = 0; i < nums.length; i++) {
            let digit = getDigit(nums[i], k);
            digitBuckets[digit].push(nums[i]);
        }
        console.log("digitBuckets -> " + digitBuckets)

        //rebuilds the nums array
        nums = [].concat(...digitBuckets);
    }

}

radix(nums)