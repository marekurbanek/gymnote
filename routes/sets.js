const express = require('express')
const Run = require('../models/run')

const router = express.Router({
  mergeParams: true
})

router.post('/', (req, res) => {
  Run.create({repetitions: req.body.repetitions, weight: req.body.weight, exerciseId: req.body.exerciseId})
    .then(newRun => {
      res.json(newRun)
    })
    .catch(err => {
      console.log(err)
    })
})

module.exports = router
