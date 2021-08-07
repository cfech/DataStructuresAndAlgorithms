let array = [11, 33, 21, 5, 7, 10]

const insertionSORT = (arr) => {
    var currentValue;
    for (let i = 1; i < arr.length; i++) {
        currentValue = arr[i]
        console.log("==========")
        //here our if check is : is arr[j], greater than the current value, if yes keep lopping, if no stop nad execute line 19
        for (var j = i - 1; j >= 0 && arr[j] > currentValue; j--) {

            console.log(arr)
            console.log("compare " + arr[j] + " and " + currentValue)
            console.log("add in " + arr[j] + " in place of " + arr[j + 1])
            arr[j + 1] = arr[j]
            console.log(arr)

        }
        console.log("found the right place , add in " + currentValue + " at index " + (j + 1))
        arr[j + 1] = currentValue
        console.log(arr)
        console.log("==========")

    }

    return arr
}

console.log(insertionSORT(array))