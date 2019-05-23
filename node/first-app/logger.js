console.log(__filename);
console.log(__dirname);
var url = '';

function log(message) {
    // send an HTTP request
    console.log(message);
}


function log1(message) {
    // send an HTTP request
    console.log(message);
}

module.exports.logExposed = log;
module.exports.logExposed2 = log1;
module.exports.endPointUrl = url;