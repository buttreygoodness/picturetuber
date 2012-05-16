var fs = require('fs'),
    pictureTube = require('picture-tube'),
    PictureTuber = module.exports;
    
PictureTuber.processFile = function(fileLocation, cols){
  var columns = cols,
      tube = pictureTube({cols: columns});
      
  tube.pipe(process.stdout);
  
  fs.createReadStream(fileLocation).pipe(tube);
};
