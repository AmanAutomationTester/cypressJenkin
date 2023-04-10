const fs = require('fs'); // Import the File System module

const filePath = 'D:\\Automation\\cypresspoc\\cypress\\test.csv'; // Set the file path
const valueToWrite = 'Hello, world!'; // Set the value to write

fs.appendFile(filePath, valueToWrite + '\n', function (err) { // Append the value to the file
  if (err) throw err;
  console.log('Value written to CSV file!');
});
