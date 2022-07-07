const express = require("express");
const mongoose = require("mongoose");
const Contact = require("./models/contactModel");

const app = express();

const cors = require("cors");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello from server");
});

app.post("/create", (req, res) => {
  const emailData = req.body.emailData;
  const phoneData = req.body.phoneData;
  const messageData = req.body.messageData;
  const newContact = new Contact({
    emailData,
    phoneData,
    messageData,
  });
  newContact.save();
});

app.get("/createContact", async (req, res) => {
  const data = await Contact.find();
  if (data) res.status(200).json(data);
  else res.status(500).json("error");
});

const connectDB = async () => {
  try {
    await mongoose.connect(`mongodb://localhost:27017/shoppingKart`, {});
    console.log("Database connected successfulliy !!");
  } catch (err) {
    console.log("Failed to connect database");
  }
};

connectDB();

app.listen(8000, () => {
  console.log("Server is listening, just a minute");
});
