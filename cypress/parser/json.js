const fs = require('fs');
const path = require('path')
 const ObjectsToCsv = require('objects-to-csv');

const jsonsInDir = fs.readdirSync('D:\\Automation\\cypresspoc\\cypress\\logs').filter(file => path.extname(file) === '.json');

jsonsInDir.forEach(file => {
  const fileData = fs.readFileSync(path.join('D:\\Automation\\cypresspoc\\cypress\\logs', file));
  const json = JSON.parse(fileData.toString());
  console.log(json.title)

  (async () => {
    const csv = new ObjectsToCsv(json.title);
   
    // Save to file:
    await csv.toDisk('./test.csv');
   
    // Return the CSV file as string:
    console.log(await csv.toString());
  })();
});

