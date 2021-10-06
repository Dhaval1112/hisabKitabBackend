// for accessing env configered variables
require("dotenv").config();

const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const authRoute = require("./routes/auth");
const businessRoute = require("./routes/business");
const app = express();
const server = require("http").createServer(app);
// importing io server from socket io
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true,
  },
});

// sockets component methods
const onConnect = require("./sockets/onConnect");
// socket connection methods
io.on("connect", (socket) => {
  onConnect(socket, io);
});

// dbConnection
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
  })
  .then(() => {
    console.log("DB IS CONNECTED NOW");
  })
  .catch((err) => {
    console.error("\n\nFAILED TO CONNECT WITH DATABASE ", err);
  });

// middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

// routes
app.use("/hkapi", authRoute);
app.use("/hkapi", businessRoute);

app.get("/hello", (req, res) => {
  return res.send("HELlo ");
});

// port
const port = 5000;
// starting a server
server.listen(port, () => {
  console.log(`App is listening at ${port}`);
});
