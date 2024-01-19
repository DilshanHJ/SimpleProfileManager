const md5 = require('md5')
const { User } = require('../../Models/Models')

const login = async (req, res) => {
	const { email, password } = req.body
	const passhash = md5(password)
	const result = await User.find({ email: email, password: passhash })
	const user = result[0]
	if (result.length <= 0) {
		res.status(401).json({ message: 'User not found' })
	} else {
		req.session.userid = user._id
		req.session.username = user.username
		req.session.loggedin = true
		res.json({ message: 'Successfull' })
	}
}

module.exports = { login }
