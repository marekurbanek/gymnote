const express = require('express')
const Run = require('../models/run')
const auth = require("../authentication/authentication")

const router = express.Router({
  mergeParams: true
})

router.post('/', auth.verify, (req, res) => {
  Run.create({repetitions: req.body.repetitions, weight: req.body.weight, exerciseId: req.body.exerciseId})
    .then(newRun => {
      res.json(newRun)
    })
    .catch(err => {
      console.log(err)
    })
})

module.exports = router
