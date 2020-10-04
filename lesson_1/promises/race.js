const promise1 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('promise1 resolved')
	}, 3000)
})

const promise2 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('promise2 resolved')
	}, 2000)
})

Promise.race([promise1, promise2])
	.then((result) => console.log(result)) //promise2 resolved
	.catch((err) => console.log(err))

const promise3 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('promise3 resolved')
	}, 3000)
})

const promise4 = new Promise((resolve, reject) => {
	setTimeout(() => {
		reject('promise4 rejected')
	}, 2000)
})

Promise.race([promise3, promise4])
	.then((result) => console.log(result)) //promise4 rejected
	.catch((err) => console.log(err))