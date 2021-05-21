const server = require('./src/server')
const dbConnect = require('./src/lib/db')



dbConnect()
	.then((res) =>{
		console.log('db connected')
		server.listen(8080, () => {
			console.log('server is listening')
		})
	})
	.catch(err => console.log('err: ', err))
	
