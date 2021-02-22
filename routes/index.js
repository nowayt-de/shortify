const router = require('express').Router()
const { redirect } = require('../controllers/redirect.controller')

router.get('/:id', redirect)

module.exports = router
