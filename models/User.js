const {model, Schema} = require('mongoose')

const UserSchema = new Schema({
  username: {
    type: String,
    required: true
  }
  //add in a blog property later
})

//plug into UserSchema the passport-local-mongoose so User has all the passport functionality
UserSchema.plugin(require('passport-local-mongoose'))

module.exports = model('user', UserSchema)