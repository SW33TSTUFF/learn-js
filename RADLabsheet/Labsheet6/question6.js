const fs = require('fs').promises;

async function mergefile() {
  try {
    const [data1, data2] = await Promise.all([
      fs.readFile('file1.txt', 'utf8'),
      fs.readFile('file2.txt', 'utf8')
    ]);

    const combinedData = data1 + '\n' + data2 + '\n';

    await fs.writeFile('result.txt', combinedData, 'utf8');

    console.log("Combine success");
  } catch (err) {
    console.error("Error found" + err);
  }
}

mergefile();




