let array = [12,329,592,7,19,33,57,-3,35,1,129,123,478,987,62385]

let count = 0
const selectionSORT = (arr) => {
    for(let i = 0; i< arr.length; i++){
        let min = i
        for(let j = i +1; j < arr.length; j ++){
            if(arr[j] < arr[min]){
                min = j
            }
        }
        count++

        if(min != i){
            
            console.log("================== " + count + " =====================")
            console.log(arr)
            console.log(arr[min] + " : is less than :" + arr[i])
            swap(arr, i, min)
            console.log(arr)
            console.log("================== " + count + " =====================")
        }
    }

    return arr
}

const swap = (arr, i1, i2) => {
    [arr[i1], arr[i2]] = [arr[i2], arr[i1]]
    }

    console.log(selectionSORT(array))