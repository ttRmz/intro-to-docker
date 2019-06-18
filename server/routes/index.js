var express = require('express')
var router = express.Router()

router.get('/students', (req, res, next) => {
  db.collection('Students')
    .find({})
    .toArray((err, data) => (data ? res.send(data) : next()))
})

module.exports = router
