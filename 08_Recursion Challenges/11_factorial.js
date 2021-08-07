function factorial(num){
    console.log(num)
    
    //have to account for edge case 0
    if(num <= 1){
    console.log("one")
    return 1
    }
    
    return num * factorial(num-1);
}