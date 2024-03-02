const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const EdgewoodAlertSchema = new Schema ({
  text: { type: String },
  dateAdded: { type: Date, required: true, default: Date.now }
}, { timestamps: true });

module.exports = mongoose.model("EdgewoodAlert", EdgewoodAlertSchema);