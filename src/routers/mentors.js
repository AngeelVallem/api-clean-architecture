const express = require('express')
const router = express.Router()
const mentors = require('../usecases/mentors')


router.get('/', async (req,res) => {

	try{
		const allMentors = await mentors.getAll()
		res.status(200)
		res.json({
			succes : "true",
			message : "All mentors",
			data : {
				mentors : allMentors
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
		const mentor = req.body
		await mentors.create(mentor)
		res.json({
			success: "true",
			message: "Mentor created successfully"
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
		await mentors.deleteById(id)


		res.json({
			success : "true",
			message : "Mentor deleted successfully"
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

router.patch('/:id', async (req,res) => {
    try {
				const {id} = req.params
        const updatedData = req.body
        const updatedMentor = await mentors.updateById(id,updatedData);
        res.status(200).json({
            success: true,
            message: 'Updated mentor',
            data: {
                updatedMentor
            }
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'Error at updatedById',
            data: error.message
        })
    }
})


module.exports = router


