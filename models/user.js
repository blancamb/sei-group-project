//! Require
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

//! USER RATING SCHEMA
const userRatingSchema = new mongoose.Schema({
  rating: { type: Number, required: true, min: 1, max: 5 }, //* rating user B gives of user A 
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true } //* user B (the 'rater')
}, {
  timestamps: true
})

//! USER COMMENTS SCHEMA
const userCommentsSchema = new mongoose.Schema({
  text: [{ type: String, maxlength: 200, required: true }],
  user: { type: mongoose.Schema.ObjectId, ref: 'User' }
}, {
  timestamps: true
})

//! USER PINS SCHEMA
const pinSchema = new mongoose.Schema({
  title: { type: String, required: true, maxlength: 100 },
  place: { type: String, required: true, maxlength: 100 },
  latitude: { type: String, required: true },
  longitude: { type: String, required: true },
  note: { type: String, maxlength: 300 }
}, {
  timestamps: true
})

//! MAIN USER SCHEMA
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true, maxlength: 50 },//* username of user
  email: { type: String, required: true, unique: true, maxlength: 50 },//* email of user
  password: { type: String, required: true },//* password
  postcode: { type: String, required: true },//* postcode location
  profilePic: { type: String }, //* profile picture to allow different options.
  articlesPosted: [{ type: mongoose.Schema.ObjectId, ref: 'Article', required: true }],//* array of Id's which we can populate on get request.
  favourites: {
    favArticles: [{ type: mongoose.Schema.ObjectId, ref: 'Article' }],
    favUsers: [{ type: mongoose.Schema.ObjectId, ref: 'User' }],
    favPosts: [{ type: mongoose.Schema.ObjectId, ref: 'Post' }]
  },
  pins: [pinSchema],
  user: [{ type: mongoose.Schema.ObjectId, ref: 'User' }],
  ratings: [userRatingSchema],//* reference to userRating schema to find the rating and the user who rated.
  comments: [userCommentsSchema] //* array of comments on user
}, {
  timestamps: true
})

//! VIRTUALS
//* virtual for Created Articles
userSchema.virtual('createdArticles', {
  ref: 'Article',
  localField: '_id',
  foreignField: 'user'
})

//* virtual for createdPosts
userSchema.virtual('createdPosts', {
  ref: 'Post',
  localField: '_id',
  foreignField: 'user'
})

userSchema //* stuff that won't be displayed in responses
  .set('toJSON', {
    virtuals: true,
    transform(doc, json) {
      delete json.password
      delete json.email
      return json
    }
  })

//! PREVALIDATION
//* validate incoming passwords of users trying to login against their saved one in the db
userSchema.methods.validatePassword = function (password) {
  return bcrypt.compareSync(password, this.password)
}
userSchema //* sets virtual field on model called _passwordConfirmation
  .virtual('passwordConfirmation')
  .set(function (passwordConfirmation) {
    this._passwordConfirmation = passwordConfirmation
  })
userSchema //* runs before (pre) mongos own validations, if it doesn't match we stop user's creation
  .pre('validate', function (next) {
    if (this.isModified('password') && this._passwordConfirmation !== this.password) {
      this.invalidate('passwordConfirmation', 'Password does not match')
    }
    next()
  })
userSchema //* will run before the model is saved and hash the password before it's sent
  .pre('save', function (next) {
    if (this.isModified('password')) {
      this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8))
    }
    next()
  })

//* Require Plugin for uniqueValidator
userSchema.plugin(require('mongoose-unique-validator'))

//! Export
module.exports =
  mongoose.model('User', userSchema)