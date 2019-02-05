const express = require('express')
const sql = require('mssql/msnodesqlv8')
const auth = require('../authentication/authentication')

const router = express.Router({
  mergeParams: true
})

router.post('/', (req, res) => {
  const request = new sql.Request()
  request.query(`INSERT INTO sets (exerciseId, repetitions, weight) values (${req.body.exerciseId}, ${req.body.repetitions}, ${req.body.weight})`)
    .then(sets => {
      res.json(sets.recordset)
    })
    .catch(err => {
      console.log(err)
    })
})

module.exports = router
