const checkloggedin = (req, res) => {
	const username = req.session.username
	const loggedin = req.session.loggedin
	res.json({ username, loggedin })
}
module.exports = { checkloggedin }
