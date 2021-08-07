//returns 1st x fib numbers
function fibonacci(nums) {

    let fib = [0, 1];
    let data = [];

    for (let i = 2; i <= nums; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
        data.push(fib[i]);
    }
    console.log(fib)
    console.log(data)
    return data
}

fibonacci(25)

//returns 1st x fib numbers
// function fibonacci(nums) {

//     let fib = [0, 1];
//     let data = [];

//     let i = 2

//     while (data.length != nums) {
//         fib[i] = fib[i - 1] + fib[i - 2];
//         data.push(fib[i]);
//         i++
//     }
//     console.log(fib)
//     console.log(data)
//     console.log(data.length)
//     return data
// }



// fibonacci(25)

//another variation
// function Fibonacci(num){
// 	var before = 0;
// 	var actual = 1;
// 	var next = 1;

// 	for(let i = 0; i < num; i++){
// 		console.log(next)
// 		before = actual + next;
// 		actual = next
// 		next = before
// 	}
// }

// Fibonacci(100);