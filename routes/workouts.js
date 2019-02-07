const express = require('express')
const Workout = require('../models/workout')
const Exercise = require('../models/exercise')
const Run = require('../models/run')
const auth = require('../authentication/authentication')

const router = express.Router({
  mergeParams: true
})

router.get('/', auth.verify, (req, res) => {
  Workout.findAll({
      where: {userId: req.userId},
      include: [{
        model: Exercise,
        include: [
          Run
        ]
      }]
    })
    .then(workouts => {
      res.json(workouts)
    })
    .catch(err => {
      console.log(err)
    })
})

router.post('/', auth.verify, (req, res) => {
  Workout.create({
      name: req.body.name,
      userId: req.userId
    })
    .then((workout) => {
      res.json(workout)
    })
    .catch(err => {
      console.log(err)
    })
})

router.delete('/:id', (req, res) => {
  Workout.findByPk(req.params.id)
    .then(work => {
      work.destroy()
        .then(() => {
          res.json("Destroyed")
        })
        .catch(err => {
          res.json(err)
          console.log(err)
        })
    })
})

module.exports = router