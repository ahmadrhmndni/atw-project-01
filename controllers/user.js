
let users = [
	{id: 1, name: 'Gorengg', email: 'goreng@gmail.com'},
	{id: 2, name: 'Rendang', email: 'rendang@gmail.com'}
]

module.exports = {
	index: function(request, response){
		if (users.length > 0) {
			response.json({
				status: true,
				data: users,
				method: request.method,
				url: request.url
			})		
		} else {
			response.json({
				status: false,
				message: 'Data User Tidak Ditemukan'
			})
		}
	// response.send('Get User')
	},
	store: function(request, response){
	users.push(request.body)
	response.send({
		status: true,
		data: users,
		message: 'Data User Berhasil Disimpan',
		method: request.method,
		url: request.url
		})
	},
	update: function(request, response){
	const id = request.params.id
	users.filter(user => {
		if(user.id == id) {
			user.id = id
			user.name = request.body.name
			user.email = request.body.email

			return user
		}
	})

	response.json({
		status: true,
		data: users,
		message: 'Data User Berhasil Diedit',
		method: request.method,
		url: request.url
	})
	// response.send(id)
	},
	delete: function(request,response){
	let id = request.params.userId
	users = users.filter(user => user.id != id)
	response.send({
		status: true,
		data: users,
		message: 'Data User Berhasil Dihapus',
		method: request.method,
		url: request.url})
	}

}