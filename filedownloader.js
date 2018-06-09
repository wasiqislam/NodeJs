var networkProtocol = require('http'); //change to https if remoteUrl has ssl.
var fs = require('fs');

const filePath = ""; //your filepath such as /usr/document/vides
const fileExtension = ".mp3" //your file extension such as .mp4, mp3, .gif
var remoteUriList = [];  //list of urls of the file require downloading


var download = function(url, filename) {
    var donwloadFile = filePath+filename;
    var file = fs.createWriteStream(donwloadFile);
    var request = networkProtocol.get(url, function(response) {
        response.pipe(file);
    });
}

for(var i=0; i<remoteUriList.length; i++) {
    var fileName = "lesson "+i+fileExtension;
    download(remoteUriList[i], fileName);
}

