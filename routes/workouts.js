const express = require('express')
const Workout = require('../models/workout')
const Exercise = require('../models/exercise')
const Run = require('../models/run')
const Sequelize = require('sequelize')

const router = express.Router({
  mergeParams: true
})

router.get('/', (req, res) => {
  Workout.findAll({
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

router.post('/', (req, res) => {
  Workout.create({
      name: req.body.name
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

// transformResponseToWorkouts = (workoutData) => {

//   // const workoutsRes = workoutData[0];
//   // const exercisesRes = workoutData[1];
//   // const setsRes = workoutData[2];

//   // exercisesRes.forEach(exercise => {
//   //   exercise['sets'] = [];
//   // });
//   // workoutsRes.forEach(workout => {
//   //   workout['exercises'] = [];
//   // });

//   // setsRes.forEach(set => {
//   //   exercisesRes.find(x => x.id === set.exerciseId)['sets'].push(set);
//   // });

//   // exercisesRes.forEach(exercise => {
//   //   workoutsRes.find(x => x.id === exercise.workoutId)['exercises'].push(exercise);
//   // });

//   // return workoutsRes
// }

module.exports = router