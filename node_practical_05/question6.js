function reverseString(input) {
    const reversed = input.split('').reverse().join('');
    console.log(reversed);
}

const inputString = 'Hello, World!';
reverseString(inputString);
