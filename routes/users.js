const express = require("express")
const bcrypt = require("bcrypt")
const auth = require("../authentication/authentication")
const helpers = require("../users/helpers")
const User = require("../models/user")

const router = express.Router({
  mergeParams: true
})

router.post('/register', (req, res) => {
  // Check if user exists
  // User.findAll({where: {username: req.body.username}})
  //   .then(() => {
  //     res.status(400).json({
  //       errorMessage: "User with that username allready exist."
  //     })
  //   })

  bcrypt.hash(req.body.password, 10, (err, hash) => {
    if (!err) {
      User.findOrCreate({
          where: {
            username: req.body.username
          },
          defaults: {
            username: req.body.username,
            password: hash
          }
        })
        .spread((user, created) => {
          if (!created) {
            res.status(400).json({
              errorMessage: "User with that username allready exist."
            })
          } else {
            let token = auth.sign({
              username: user.username
            })
            res.json({
              token,
              expirationTime: helpers.getExpirationTimeFromToken(token),
              username: user.username,
              userId: user.id
            })
          }
        })
    } else {
      console.log(err)
    }
  })
})

router.post('/login', (req, res) => {
  User.findOne({
      where: {
        username: req.body.username
      }
    })
    .then(user => {
      bcrypt.compare(req.body.password, user.password)
        .then(result => {
          if (result) {
            let token = auth.sign({
              username: user.username
            })
            res.json({
              token,
              expirationTime: helpers.getExpirationTimeFromToken(token),
              username: user.username,
              userId: user.id
            })
          } else {
            res.status(400).json({
              errorMessage: "Password is incorrect"
            })
          }
        })
    })
    .catch(err => {
      res.status(400).json({
        errorMessage: "User with thath username doesn't exist"
      })
    })
  // const request = new sql.Request()
  // let username = req.body.username
  // getUserPasswordQuery = `SELECT password FROM users WHERE username = '${username}'`
  // request.query(getUserPasswordQuery)
  //   .then(user => {
  //     const hash = user.recordset[0].password
  //     bcrypt.compare(req.body.password, hash)
  //       .then(result => {
  //         if (result) {
  //           utils.getUserIdByUsername(username)
  //             .then(result => {
  //               let token = auth.sign({
  //                 username
  //               })
  //               let userId = result.recordset[0].id
  //               res.json({
  //                 token,
  //                 expirationTime: helpers.getExpirationTimeFromToken(token),
  //                 username,
  //                 userId
  //               })
  //             })
  //         } else {
  //           res.status(400).json({
  //             errorMessage: "Password is incorrect"
  //           })
  //         }
  //       })
  //       .catch(err => {
  //         res.send("Upss... Something went wrong " + err)
  //       })
  //   })
  //   .catch(err => {
  //     console.log(err)
  //     res.status(400).json({
  //       errorMessage: "User with thath username doesn't exist"
  //     })
  //   })
})

router.get('/data', auth.verify, (req, res) => {
  let user = {
    username: req.username,
    userId: req.userId
  }
  res.json(user)
})

module.exports = router