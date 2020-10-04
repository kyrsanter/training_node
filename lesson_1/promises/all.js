const promise1 = new Promise(( resolve, reject ) => {
	setTimeout(() => {
		resolve('promise1 resolved')
	}, 3000)
})

const promise2 = new Promise(( resolve, reject ) => {
	setTimeout(() => {
		resolve('promise2 resolved')
	}, 1000)
})

Promise.all([promise1, promise2])
	.then((resultArray) => console.log(resultArray)) //[ 'promise1 resolved', 'promise2 resolved' ]
	.catch((err) => console.log(err))

const promise3 = new Promise(( resolve, reject ) => {
	setTimeout(() => {
		reject('promise3 rejected')
	}, 3000)
})

const promise4 = new Promise(( resolve, reject ) => {
	setTimeout(() => {
		resolve('promise2 resolved')
	}, 1000)
})

Promise.all([promise3, promise4])
	.then((resultArray) => console.log(resultArray)) // promise3 rejected
	.catch((err) => console.log(err))