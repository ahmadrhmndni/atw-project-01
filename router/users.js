const express = require('express')
const router = express.Router()

const usercontroller = require('../controllers/user.js')

// let users = [
// 	{id: 1, name: 'Gorengg', email: 'goreng@gmail.com'},
// 	{id: 2, name: 'Rendang', email: 'rendang@gmail.com'}
// ]


router.route('/users')
	.get(usercontroller.index)
	.post(usercontroller.store)
// Put
router.put('/users/:id', usercontroller.update)

// Delete
router.delete('/users/:userId', usercontroller.delete)

module.exports = router