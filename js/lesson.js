let number = 12;

const time = new Date().getTime();

// function addTwoNumbers(time, a, b) {
//     return time + a + b;
// }

// function factoryFunction() {
//     return {
//         name: "asd",
//         age: 20,
//     };
// }

let counter = 10;
function recursion(counter) {
    console.log(counter);
    counter--;
    if (counter > 3) {
        recursion(counter);
    }
}

const addTwoNumbers = (num1,num2) => {
    return num1 +num2
}

 (function test(a,b){
    return a+b
})(4,5)

