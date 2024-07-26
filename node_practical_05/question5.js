const fs = require('fs');

fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    const jsonData = JSON.parse(data);
    const name = jsonData.name;
    const age = jsonData.age;

    console.log(`Name: ${name}`);
    console.log(`Age: ${age}`);
});
