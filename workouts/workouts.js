const express = require('express')
const sql = require('mssql/msnodesqlv8')
const auth = require('../authentication/authentication')

const router = express.Router({
  mergeParams: true
})

router.post('/', (req, res) => {
  const request = new sql.Request()
  request.query(`INSERT INTO workouts (name) values ('${req.body.name}')`)
    .then(comments => {
      res.json(comments.recordset)
    })
    .catch(err => {
      console.log(err)
    })
})

module.exports = router
