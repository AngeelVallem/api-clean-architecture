const Mentors = require('../models/mentors')


function getAll(){
	return Mentors.find()
}

function create(mentor){
	return Mentors.create(mentor)
}

function deleteById(id){
	return Mentors.findByIdAndDelete(id)
}

function updateById(id , updateData){
	return Mentors.findByIdAndUpdate(id,updateData)
}

module.exports = {
	getAll,
	create,
	deleteById,
	updateById
}
