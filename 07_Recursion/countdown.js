// Recursive Version
function countDown(num){
    if(num <= 0) {
        console.log("All done!");
        return;
    }
    console.log(num);
    num--;
    countDown(num);
}
countDown(3)

// Iterative Version
function countDown(num){
    for(var i = num; i > 0; i--){
        console.log(i);
    }
    console.log("All done!")
}

// var i = 0;
// function recurse () {
//     i++;
//     recurse();
// }
// try {
//     recurse();
// } catch (ex) {
//     alert('maxStackSize = ' + i + '\nerror: ' + ex);
// }

// recurse()