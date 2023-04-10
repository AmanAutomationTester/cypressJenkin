const fs = require('fs');
const path = require('path')

const jsonsInDir = fs.readdirSync('D:\\Automation\\cypresspoc\\cypress\\logs').filter(file => path.extname(file) === '.json');
let testCase=[];

jsonsInDir.forEach(file => {   
  const fileData = fs.readFileSync(path.join('D:\\Automation\\cypresspoc\\cypress\\logs', file));  
  let json = JSON.parse(fileData.toString());
  testCase.push(json.title)
  writeToCSV(json.title)  
})



console.log(testCase)
console.log(typeof testCase)

function writeToCSV(valueToWrite)
{
  const filePath = 'D:\\Automation\\cypresspoc\\cypress\\test.csv'; // Set the file path
  fs.appendFile(filePath, valueToWrite + ';', function (err) { // Append the value to the file
    if (err) throw err;
    console.log('Value written to CSV file!');
  });  
}

