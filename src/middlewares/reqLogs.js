function reqLogs(req,res,next){
			console.log(`Method: ${req.method} Url: ${req.url} Body : ${JSON.stringify(req.body)}`)
		next()
	}







module.exports = reqLogs
