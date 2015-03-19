    var fs = require('fs')
    var path = require('path')
    
module.exports.filelist = function(filepath,extension,callback){
    fs.readdir(filepath, function (err, list) {
var temp = []
if (err) return callback(err);
      list.forEach(function (file) {
        if (path.extname(file) === '.' + extension)
         temp.push(file); 
      })
	return callback(null, temp)
    })
}
