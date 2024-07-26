function factorial(num) {
    //base case
    if (num === 0 || num === 1) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}

const inputNumber = 5;
const result = factorial(inputNumber);

console.log(result); 
