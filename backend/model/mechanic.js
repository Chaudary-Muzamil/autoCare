const mongoose = require("mongoose");

const mechanicSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter the mechanic's name!"],
  },
  details: {
    type: String,
    required: [true, "Please enter details about the mechanic!"],
  },
  services: [
    {
      serviceName: String,
      serviceDescription: String,
      servicePrice: Number,
      
    },
  ],
  contact: {
    type: String, 
    required: [true, "Please enter contact information for the mechanic!"],
  },
  avatar: {
    type: String,
    required: [true, "Please provide an avatar for the mechanic!"],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Mechanic", mechanicSchema);
