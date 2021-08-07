let arry = [8,1,2,3,4,5,6,7]


//boolean saves 7 counts on this array , goes around 1 time and is a swap is made, goes around the 2nd time no swap is made so it breaks, ensures best case scenario time complexity
//let arry = [8,1,2,3,4,5,6,7]


const bubbleSort = (a) =>{
let count =0
for(let i = a.length ; i >= 0; i--){
    noSwaps = true;
    count ++
    for(let j = 0; j < i-1; j++){
        if(a[j] > a[j+1]){
            swap(a, j, j+1)
            noSwaps = false; 
            
        }
    }
    if(noSwaps) break;
}
console.log("count -> " + count)
return a
}

const swap = (arr, i1, i2) => {
[arr[i1], arr[i2]] = [arr[i2], arr[i1]]
}

console.log(bubbleSort(arry))










//not as efficeint cause we need to loop through the whole array each while loop circle
const sortDesc = (arr) => {
    console.log(arr)


    count = 0
    while (count < arr.length) {
        count++
        let wasMoveMade = false
        console.log("==============" + count + "===================")
        for (let i = 0; i < arr.length; i++) {
            let current = arr[i]

            if (current < arr[i + 1]) {
                wasMoveMade = true
                console.log(current + " is less than " + arr[i + 1])
                console.log("1: " + arr)
                console.log("replace " + arr[i] + " with: " + arr[i + 1])
                arr[i] = arr[i + 1]
                console.log("2: " + arr)
                console.log("replace " + arr[i + 1] + " with " + current)
                arr[i + 1] = current
                console.log("3: " + arr)
            }
        }

        if (!wasMoveMade) { return arr }
    }

}

// sortDesc(arry)

//asc
const sort = (arr) => {
    console.log(arr)


    count = 0
    while (count < arr.length) {
        count++
        let wasMoveMade = false
        console.log("==============" + count + "===================")
        for (let i = 0; i < arr.length; i++) {
            let current = arr[i]

            if (current > arr[i + 1]) {
                wasMoveMade = true
                console.log(current + " is greater than " + arr[i + 1])
                console.log("1: " + arr)
                console.log("replace " + arr[i] + " with: " + arr[i + 1])
                arr[i] = arr[i + 1]
                console.log("2: " + arr)
                console.log("replace " + arr[i + 1] + " with " + current)
                arr[i + 1] = current
                console.log("3: " + arr)
            }
        }

        if (!wasMoveMade) { return arr }
    }

}

// sort(arry)