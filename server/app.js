require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const session = require('express-session')
const cors = require('cors')
const { register } = require('./Controllers/POST/register')
const { login } = require('./Controllers/POST/login')
const { checkloggedin } = require('./Controllers/GET/checkloggedin')
const { logout } = require('./Controllers/GET/logout')
const { getprofile } = require('./Controllers/GET/getprofile')

//Express settings
const app = express()
app.use(bodyParser.urlencoded({ extended: true, limit: '100mb' }))
app.use(bodyParser.json({ limit: '100mb' }))
app.use(express.static(__dirname + '/Views/'))

app.use(
	cors({
		origin: 'http://localhost:5173',
		credentials: true,
	}),
)
app.use(
	session({
		secret: process.env.SESSION_SECRET,
		resave: true,
		saveUninitialized: true,
		cookie: { maxAge: 3600000 },
	}),
)

//Mongodb Database Connection
mongoose.set('strictQuery', true)
mongoose
	.connect(process.env.MONGODB_URI)
	.then(console.log('Mongodb is connected...'))

//Routes

//POST REQUESTS
app.post('/api/register', register)
app.post('/api/login', login)

//GET REQUESTS
app.get('/api/checkloggedin', checkloggedin)
app.get('/api/logout', logout)
app.get('/api/profile', getprofile)

//START SERVER
app.listen(3000, () => {
	console.log('Start listning at port 3000...')
})
