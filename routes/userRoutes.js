const router = require('express').Router()

const {User} = require('../models')

//bring in passport to lock routes
const passport = require('passport')

//bring in jwt to return if the user sucessfully logs in
const jwt = require('jsonwebtoken')

//register a new user
router.post('/users/register', (request, response) => {
  //pass in a new User into register. Only takes the username. Do not store password into database for security reasons. Instead, a salt and hash will be store in the db 
  User.register( new User({
    username: request.body.username
  }), request.body.password, error => {
    if(error) throw error
    response.sendStatus(200)
  })
})

//user login
router.post('/users/login', (request, response) => {
  //authenticate takes in a username, password, and a callback function
  User.authenticate()(request.body.username, request.body.password, (error, user) => {
    //error if wrong username or password
    if(error) throw error
    response.json({
      //what to return if the user sucessfully logs in
      //by doing two NOTs it turns user's value to be either true or false
      isLoggedIn: !!user,
      username: user.username,
      id: user._id,
      //pass in a user's blogs here as well
      //pass in the secret and user's id to generate a jwt
      token: jwt.sign({id: user._id}, process.env.SECRET)
    })
  })
})

//test route to check for authorization
// router.get('/users', passport.authenticate('jwt'), (request, response) => {
//   User.find()
//   .then( users => response.json(users))
//   .catch(error => {
//     console.error(error)
//     response.sendStatus(400)
//   })
// })

module.exports = router