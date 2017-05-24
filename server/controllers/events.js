'use strict';

const Event = require('../models/event');

exports.getAll = function* () {
  const events = yield Event.find()
  this.body = events;
  this.status = 200;
}


exports.addEvent = function* () {
  const event = this.request.body;
  const newEvent = new Event({
    title: event.title,
    date: event.date,
    venue: event.venue
  });
  newEvent.save();
  this.status = 200;
}
