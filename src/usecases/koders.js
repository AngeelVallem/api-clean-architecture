
const Koders = require('../models/koders')


function getAll(){
	return Koders.find()
}

function postKoder(koder){
	return Koders.create(koder)
}

function deleteKoder(id){
	return Koders.findByIdAndDelete(id)
} 

function updateById(id , update){
	return Koders.findByIdAndUpdate(id,update)
}

module.exports = {
	getAll,
	postKoder,
	deleteKoder,
	updateById
}
