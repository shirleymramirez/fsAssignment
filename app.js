var fs = require('fs');

let challenges1 = fs.readFileSync('./challenge1/info.txt', 'utf8', (err, data) => {
    if(err) {
        console.log(err);
    } else {
        console.log(data);
    }
});

console.log(challenges1);
