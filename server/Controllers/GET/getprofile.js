const { User } = require('../../Models/Models')
const getprofile = async (req, res) => {
	const userid = req.session.userid
	const loggedin = req.session.loggedin
	const user = await User.findById(userid)
	await res.json({
		loggedin,
		userid: await user?._id,
		username: await user?.username,
		email: await user?.email,
	})
}
module.exports = { getprofile }
