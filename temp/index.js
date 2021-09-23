const express = require("express");

const app = express();

const admin = (req, res) => {
  return res.send("Admin dashboard");
};
const isAdmin = (req, res, next) => {
  console.log("its isAdmin");
  next();
};

const isLoggedIn = (req, res, next) => {
  console.log("this is is login");
  next();
};

app.get("/admin", isLoggedIn, isAdmin, admin);

app.get("/say/:id/:userId", (req, res) => {
  return res.send(req.params);
});

app.get("/signOut", (req, res) => {
  return res.send("Signout");
});

app.get("/hitesh", (req, res) => {
  return res.send("Uses instagram");
});

const port = 3000;
app.listen(port, () => {
  console.log(`Express is listening at ${port} port`);
});

//rethinkDb testing files
// const express = require("express");
// const r = require("rethinkdb");
// const rethinkdbdash = require("rethinkdbdash");

// var cors = require("cors");

// const app = express();
// const port = 8000;

// rr = rethinkdbdash({ db: "mydb" });

// function pollingUpdate() {
//   rr.table("users")
//     .changes()
//     .then((res) => {
//       res.each((err, result) => {
//         if (err) console.log(err);
//         console.log(result);
//       });
//     });
// }

// pollingUpdate();
