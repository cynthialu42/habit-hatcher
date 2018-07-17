var mongoose = require('mongoose');

var HabitSchema = new mongoose.Schema({

  name: String,
  iteration: Number,
  egg: Number


});

module.exports = mongoose.model('Habit', HabitSchema);
