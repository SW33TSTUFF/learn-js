// Global scope 
const globalVariable = 'Global variable';
const numbers = [1, 2, 3, 4, 5];

function showScope() {
  // Local scope 
  const localVariable = "Local variable";

  console.log(globalVariable); 
  console.log(localVariable); 
}

function arrayMethods() {
  // push and pop method
  numbers.push(6);
  console.log("push number 6: " + numbers);

  const popValue = numbers.pop();
  console.log("pop number 6" + numbers);
  console.log("Pop value is" + popValue);

  // map method for square num
  const squaredNumbers = numbers.map((num) => num * num);
  console.log("Square number array: " + squaredNumbers);

  // reduce method for sum values
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  console.log("Sum: "+ sum);
}

showScope();
arrayMethods();
