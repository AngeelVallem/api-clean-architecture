const express = require('express')
const router = express.Router()
const koders = require('../usecases/koders')
			
	
router.get('/', async (req,res) => {
	
	try{
		const allKoders = await koders.getAll()
		res.status(200)
		res.json({
			succes : "true",
			message : "All koders",
			data : {
				koders : allKoders
			}
		})	
	}	
	catch(err){
		res.status(400)	
		res.json({
			success : "false",
			message : err.message
		})
	}
})

router.post('/', async (req,res) => {
	
	try{
		const koder = req.body
		await koders.postKoder(koder)
		res.json({
			success: "true",
			message: "Koder created successfully"		
		})
	}
	catch(err){
		res.status(400)
		res.json({
			success: "false",
			message: err.message	
		})
	}
})

router.delete('/:id', async (req,res) => {
	
	try{
		const id = req.params.id
		await koders.deleteKoder(id)
		

		res.json({
			success : "true",
			message : "Koder deleted successfully"
		})

	}
	catch(err){
		res.status(400)
		res.json({
			succes : "false",
			message : err.message
		})
	}
})

module.exports = router





