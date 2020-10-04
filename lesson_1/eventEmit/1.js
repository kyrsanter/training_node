const {EventEmitter} = require('events');

const storage = new EventEmitter();

storage.on('data', (data) => {   // calls first with the same event name "data"
	if (data.age > 25) {
		data.prop = 'old'
	}
})

storage.on('data', (data) => { // calls second with the same event name "data"
	console.log(data) // { name: 'Vasya', age: 26, prop: 'old' }
}) // to call this first - need to change "on" to "prependListener"

storage.emit('data', {
	name: 'Vasya',
	age: 26
});
