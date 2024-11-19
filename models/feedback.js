const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  companyname: {
    type: String,
    required: true,
  },
  phoneno: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

const Feedbackmodel = mongoose.model("Feedback", feedbackSchema);
module.exports = Feedbackmodel;
