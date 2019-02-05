const express = require('express')
const sql = require('mssql/msnodesqlv8')
const auth = require('../authentication/authentication')

const router = express.Router({
  mergeParams: true
})

router.get('/', (req, res) => {
  const request = new sql.Request()
  request.query(`
    select * from workouts
    select * from exercises
    select * from sets
  `)
    .then(workouts => {
      res.json(transformResponseToWorkouts(workouts.recordsets))
    })
    .catch(err => {
      console.log(err)
    })
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

transformResponseToWorkouts = (workoutData) => {
  const workoutsRes = workoutData[0];
  const exercisesRes = workoutData[1];
  const setsRes = workoutData[2];

  exercisesRes.forEach(exercise => {
    exercise['sets'] = [];
  });
  workoutsRes.forEach(workout => {
    workout['exercises'] = [];
  });

  setsRes.forEach(set => {
    exercisesRes.find(x => x.id === set.exerciseId)['sets'].push(set);
  });

  exercisesRes.forEach(exercise => {
    workoutsRes.find(x => x.id === exercise.workoutId)['exercises'].push(exercise);
  });

  return workoutsRes
}

module.exports = router
