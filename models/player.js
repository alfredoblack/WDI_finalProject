var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var playerSchema = new mongoose.Schema({
  // name: { type: String, required: true },
  // image: { type: String },
  // spiritualanimal: { type: String, unique: true },
  // github: { type: String, required: true, unique: true },
  // twitter: { type: String, required: true, unique: true },
  // team: { type: mongoose.Schema.ObjectId, ref: 'Team' }
   username: String,
   email: String,
   passwordHash: String,
   githubId: String,
   github: String,
   twitterId: String,
   twitter: String,
   avatar: String,
   spiritualanimal: String,
   dodge: Number,
   dip: Number,
   dive: Number,
   duck: Number,
   hits: Number,
   catches: Number,
   rebounds: Number,
   speed: Number

   // teams: { type: mongoose.Schema.ObjectId, ref: 'Team' }

});

playerSchema.set('toJSON',{
  transform: function(document, json){
    delete json.passwordHash;
    delete json.__v;
    return json;
  }
});

playerSchema.virtual('password')
  .set(function(password) {
    // save on the object, in case we need it later
    this._password = password;

    // hash the password and save on the passwordHash property
    this.passwordHash = bcrypt.hashSync(this._password, bcrypt.genSaltSync(8));
  });

playerSchema.virtual('passwordConfirmation')
  .get(function() {
    return this._passwordConfirmation;
  })
  .set(function(passwordConfirmation) {
    this._passwordConfirmation = passwordConfirmation;
  });

playerSchema.path('passwordHash')
  .validate(function(passwordHash) {
    if(this.isNew) {
      if(!this._password) {
        // If there was no password sent from the client
        return this.invalidate('password', 'A password is required');
      }

      if(this._password !== this._passwordConfirmation) {
        // If the password and passwordConfirmation does not match
        return this.invalidate('passwordConfirmation', 'Passwords do not match');
      }
    }
  });

playerSchema.methods.validatePassword = function(password) {
  return bcrypt.compareSync(password, this.passwordHash);
}

// playerSchema.pre('validate', function(next) {
//   if(!this._password && !this.githubId) {
//     this.invalidate('password', 'A password is required');
//   }
//   next();
// });

// playerSchema.pre('validate', function(next) {
//   if(!this._password && !this.twitterId) {
//     this.invalidate('password', 'A password is required');
//   }
//   next();
// });



module.exports = mongoose.model('Player', playerSchema);
