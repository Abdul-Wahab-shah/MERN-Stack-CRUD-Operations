const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userModel = require("./models/user");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  userModel
    .find({})
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.get("/getUser/:id", (req, res) => {
  const id = req.params.id;
  userModel.findById({_id:id})
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
});

app.delete('/deleteUser/:id', (req, res) => {
  const id = req.params.id;
  userModel.findByIdAndDelete({_id:id})
    .then(() => res.json({ message: 'User deleted successfully' }))
    .catch((err) => res.json(err));
});

app.post("/createUser", (req, res) => {
  userModel
    .create(req.body)
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
});

app.put("/updateUser/:id", (req, res) => {
  const id = req.params.id;
  userModel.findByIdAndUpdate({_id:id}, {
    name: req.body.name,
    email: req.body.email,
    age: req.body.age
  })
  .then(() => res.json({ message: 'User updated successfully' }))
  .catch((err) => res.json(err));
});

mongoose.connect(
  "mongodb+srv://abdulwahab030910:Pakistan55@cluster0.jasdgkj.mongodb.net/"
);
app.listen(3001, () => {
  console.log("Server is working on 3001 port");
});
