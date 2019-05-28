var fs = require('fs');

let challenges1 = fs.readFileSync('./challenge1/info.txt', 'utf8', (err, data) => {
    if(err) {
        console.log(err);
    } else {
        console.log(data);
    }
});

console.log(challenges1);

let groupName = fs.readFileSync('challenge2/info.txt', 'utf-8', (err, data) => {
    if(err) {
        console.log(err);
    } else {
        console.log(data);
    }
});

groupName = groupName + '\nShirley\nGladys\nGlai\nShiela'
fs.writeFileSync('challenge2/info.txt', groupName)


