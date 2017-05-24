const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;


const eventSchema = new Schema({
  title: { type: String, required: true },
  date:  { type: Date, required: true },
  venue: { type: String, required: true}
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
