var fs = require('fs');
var path = require('path');

function filterFiles(dir, ext, callback) {

    fs.readdir(dir, function(err, data) {
        var files = new Array();

        if (err) return callback(err);

        data.forEach(function(file) {

//          if (path.extname(file) === ext) return callback(err, file);
                      if (path.extname(file) == "."+ext) {
                                      files.push(file);
                                                  }

                                                          });

                                                                  return callback(null, files);

                                                                      });

                                                                      }

                                               module.exports = filterFiles;
