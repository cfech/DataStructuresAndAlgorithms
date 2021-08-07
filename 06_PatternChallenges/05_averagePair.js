function averagePair(arr, num) {
    let start = 0
    let end = arr.length - 1;


    console.log(arr)
    
    while (start < end) {
        console.log("==========")
        console.log(start)
        console.log(end)
        //the two numbers we are accessing in this iteration
        let avg = (arr[start] + arr[end]) / 2


        if (avg === num) {
            console.log(avg + " A=N" + num)
            return true;
        }

        else if (avg < num) {
            console.log(avg + " A<N " + num)
            start++
            
        }
        else {
            console.log(avg + "A>N " + num)
            end--
        }
    }

    return false;
}

averagePair([1,3,3,5,5,6,7,10,12,19], 8)