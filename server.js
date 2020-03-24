require('dotenv').config()
const express = require('express')
const { join } = require('path')

//bring in passport and local strategy
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy

//Strategy for deployment using JSON web token
const {Strategy: JWTStrategy, ExtractJwt} = require('passport-jwt')

//bring in models to apply secret and return User info for any locked routes
const {User} = require('./models')
const app = express()

//express middleware
app.use(express.static(join(__dirname, 'public', 'build')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//passport middlware
app.use(passport.initialize())
app.use(passport.session())

//passport usage for local authentication
passport.use(new LocalStrategy(User.authenticate()))
//encrypting and decrypting user info
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())


//middleware to let use lock routes. Locked routes will require a Bearer token. If a token is present, the route will run and return to us user info as well
passport.use(new JWTStrategy({
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.SECRET
}, (jwtPayload, cb) => User.findById(jwtPayload.id)
    .then( user => cb(null, user))
    .catch( error => cb(error))
))


require('./config')
  .then(() => app.listen(process.env.PORT || 3001))
  .catch( error => console.error(error))

