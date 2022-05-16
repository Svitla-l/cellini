const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");

const app = express();

const db = require("./dbconnection");

// database connection
db.connect((err) => {
  err
    ? console.log("db connection failed ...")
    : console.log("db connection success ..");
});
//cors
app.use(cors());

// router path
const routes = require("./router/router");

// bodyparser
app.use(bodyparser.json());

app.use("/api", routes);

// server
app.listen(3000, (err) => {
  if (err) throw err;
  console.log("server running....");
});


// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require("cors");
// const { createServer } = require('http');
// const app = express();
// const port = 3000;


// mongoose.connect('mongodb+srv://admin:1111@cluster0.4agm4.mongodb.net/cellini?retryWrites=true&w=majority', {
//     useNewUrlParser: true,
//   })
//   .then(() => console.log('MongoDb connected'))
//   .catch(err => console.log(err));
//   app.use(cors());
//   const routes = require('./router')
// const UsersSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//     required: true,
//   },
// });

// const Users = mongoose.model('Users', UsersSchema);
// app.use("/api", routes)
// app.get('/', (req, res) => {
//   Users.create({
//     name: 'Denis',
//     email: 'test@test.com',
//   })
//     .then(user => res.send(user))
//     .catch(err => res.send(err));
//   // Users.find()
//   //   .then(users => res.send(users))
//   //   .catch(err => res.send(err));
// });

// const server = createServer(app);
// server.listen(port, () => console.log(`server is up. port: ${port}`));