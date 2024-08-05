const first = 'Hello, World!';
const buffer = Buffer.from(first);

console.log('Original Buffer:', buffer.toString());

const modification = 'Node.js';
buffer.write(modification, 0, modification.length, 'utf8');

console.log('Modified Buffer:', buffer.toString());



