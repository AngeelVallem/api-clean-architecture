function reqLogs(req,res,next){
			console.log(`Method: ${req.method} Url: ${req.originalUrl} Body : ${JSON.stringify(req.body)}`)
		next()
	}







module.exports = reqLogs
