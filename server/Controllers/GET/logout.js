const logout = (req, res) => {
	req.session.userid = null
	req.session.username = null
	req.session.loggedin = false
	res.json({ message: 'Successfull' })
}
module.exports = { logout }
