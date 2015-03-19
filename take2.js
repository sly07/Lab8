var dir = process.argv[2];
var extname = process.argv[3];
var mymodule = require('./module.js');

function listFiles(err, data) {

    if (err) console.log(err);

    console.log(data.join('\n'));
//  data.forEach(function(file) {
//  //      console.log(file);
//  //  })

  }

  mymodule(dir, extname, listFiles);
