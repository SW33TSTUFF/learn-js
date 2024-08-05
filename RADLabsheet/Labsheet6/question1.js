const fs = require('fs');

const readableStream = fs.createReadStream('input.txt');
const writableStream = fs.createWriteStream('output.txt');

readableStream.on('data', function(chunk) {
  writableStream.write(chunk);
});

readableStream.on('end', function() {
  console.log('Data has been read from input.txt and written to output.txt');
});

readableStream.on('error', function(err) {
  console.log('Error reading from input.txt:', err);
});

writableStream.on('finish', function() {
  console.log('Data has been written to output.txt');
});

writableStream.on('error', function(err) {
  console.log('Error writing to output.txt:', err);
});
