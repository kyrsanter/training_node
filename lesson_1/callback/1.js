const fs = require('fs');

const convertFiletoArray = (file, cb) => {
	fs.readFile(file, (readError, file) => {
		if (readError) {
			return cb(readError)
		}
		const lines = file.toString()
			.trim()
			.split('\n');
		cb(null, lines);
	})
}

convertFiletoArray(__filename, (err, lines) => {
	if (err) {
		console.log(err) //{ [Error: ENOENT: no such file or directory, open 'D:\learning\n\lesson_1\callback\d']
										// errno: -4058,
										// 	code: 'ENOENT',
										// 	syscall: 'open',
										// 	path: 'D:\\learning\\n\\lesson_1\\callback\\d' }

}
	else {
		console.log(lines.length) //22
	}
})