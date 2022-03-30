const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}))

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "1234567",
  database: "carrental",
});

app.get("/", (req, res) => {
    const sqlInsert = "insert into users (id,login, password, email) VALUES ('315', 'qqqqq', 17, 'ola@op.pl')";
  db.query(sqlInsert, (err, result) => {
      console.log(err);
      console.log(result);
      res.send("User was added to the database");
  })
});

app.put("/update", (req, res) => {
  const id = req.body.id;
  const login = req.body.login;
  const password = req.body.password;
  const email = req.body.email;
  db.query(
    "UPDATE users SET login = ?, password = ?, email = ? WHERE id = ?",
    [login,password, email, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM users WHERE id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(3015, () => {
  console.log("Yey, your server is running on port 3015");
});
