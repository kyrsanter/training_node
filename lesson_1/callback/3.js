const fs = require('fs');
const {promisify} = require('util');

const readFile = promisify(fs.readFile);

readFile(__filename)
	.then((readResult) => {
	console.log(readResult.toString().trim().split('\n').length);
})
	.catch(err => {console.log(err)})