var fs = require('fs');

// ## Challenge 1:
// Simply print the contents of the text file to the screen.
let challenges1 = fs.readFileSync('./challenge1/info.txt', 'utf8', (err, data) => {
    if(err) {
        console.log(err);
    } else {
        console.log(data);
    }
});

console.log(challenges1);

// ## Challenge 2:
// Add the names of everyone in your group to the end of the text file.
let groupName = fs.readFileSync('challenge2/info.txt', 'utf-8', (err, data) => {
    if(err) {
        console.log(err);
    } else {
        console.log(data);
    }
});

groupName = groupName + '\nShirley\nGladys\nGlai\nShiela'
fs.writeFileSync('challenge2/info.txt', groupName)

// ## Challenge 3:
// The file was incorrectly named binfo.txt ...Rename it to info.txt(only using js!)
fs.renameSync("./challenge3/binfo.txt", "./challenge3/info.txt")

// ## Challenge 4:
// Create a new folder within the challenge4 folder called "copyfolder".Then copy info.txt into that folder.
fs.mkdirSync('./challenge4/copyfolder');
fs.copyFileSync('./challenge4/info.txt', './challenge4/copyfolder/info.txt');
