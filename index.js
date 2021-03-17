const express = require('express')
const userRouter = require('./router/users')
const app = express()


app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

var myLogger = function (request, response, next) {
  console.log('LOGGED')
  next()
}

app.use(myLogger)

// Gett
app.get('/', function(request, response){
	const kelas = {
		id: 1,
		nama: 'NodeJs Teknik Informatika'
	}
	 response.json(kelas)
	// console.log('Hello Saya Ahmad Rahmandani')
	// response.send('<h3>Hello Saya Ahmad Rahmandani!</h3>')
}) 

app.get('/about', function(request, response){
	response.redirect('https://drive.google.com/drive/u/2/folders/15f98STZ__W_zYg4Yd_4D62Qn5x-FR9IY')	
})

app.use(userRouter)

app.listen(3000, function(){
	console.log('Server Sudah Bisa Dijalankan')
})