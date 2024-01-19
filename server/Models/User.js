const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema({
	username: String,
	password: String,
	email: String,
})
const User = new mongoose.model('User', UserSchema)
module.exports = { User }
