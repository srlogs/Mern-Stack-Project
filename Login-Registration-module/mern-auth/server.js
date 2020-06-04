const express = require("express");   //including express
const mongoose = require("mongoose"); //including mongoose to connect with the database
const bodyParser = require("body-parser"); //including body-parser to parse the required fields
const passport = require("passport"); //including passport for tokens
const users = require("./routes/api/users");

const app = express();

//Body parser middleware

app.use(
	bodyParser.urlencoded({ extended: false })
);

app.use(bodyParser.json());

//database configuration

const db = require("./config/keys").mongoURI;

//Connect to mongodb

mongoose.connect(
	db,
	{useNewUrlParser: true}
).then(() => console.log("Mongodb successfully connected")).catch(err => console.log(err));

//port number

const port = 3000;

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use("/api/users", users);


app.listen( port, () => console.log(`server is running in the port of ${port}`));
