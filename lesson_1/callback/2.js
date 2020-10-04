const fs = require('fs');

const convertFileToArray = (file) => {
	return new Promise((resolve, reject) => {
		fs.readFile(file, (readErr, readResult) => {
			if (readErr) {
				reject(readErr)
			}
			const lines = readResult.toString().trim().split('\n');
			resolve(lines);
		})
	})
}

convertFileToArray(__filename)
	.then((lines) => {console.log(lines.length)}) //17
	.catch((err) => {console.log(err)})