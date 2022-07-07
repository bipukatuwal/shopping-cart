const mongoose = require("mongoose");
const { Schema } = mongoose;
const contactSchema = new mongoose.Schema({
  emailData: {
    type: String,
  },
  phoneData: {
    type: String,
  },
  message: {
    type: String,
  },
});

const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;
