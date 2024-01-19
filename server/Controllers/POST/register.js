const md5 = require('md5')
const { User } = require('../../Models/Models')
const register = async (req, res) => {
	const { username, email, password } = req.body
	const passhash = md5(password)
	const result = await User.find({ email: email })
	console.log(result)
	if (result.length <= 0) {
		const user = await new User()
		user.username = username
		user.password = passhash
		user.email = email
		await user.save()
		req.session.loggedin = true
		req.session.userid = user._id
		req.session.username = user.username
		res.json({ message: 'Successfull' })
	} else {
		res.status(401).json('user already exists')
	}
}
module.exports = { register }
