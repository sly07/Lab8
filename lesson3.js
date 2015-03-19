var fs = require('fs')
var buf = fs.readFile(process.argv[2], function doneReading(err, fileContents){
var temp = fileContents.toString();
var result = temp.split("\n");

console.log(result.length - 1);
})
