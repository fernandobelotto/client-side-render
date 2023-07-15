const express = require("express");
const app = express();
const port = 3000;
//vamos colocar o mongo dps
app.use(express.json());

console.log("hey!");

const user1 = {
  id: "asdf",
  name: "John",
  age: 25,
};

const user2 = {
  id: "asdfg",
  name: "Mark",
  age: 35,
};

const users = {
  asdf: user1,
  asdfg: user2,
};

app.get("/health", (req, res) => {
  res.json({
    status: "up",
  });
});

app.get("/users", (req, res) => {
  res.json({
    users: Object.values(users),
  });
});

app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  res.json({
    user: users[id],
  });
});

app.put("/users/:id", (req, res) => {});
app.delete("/users/:id", (req, res) => {});
app.post("/users", (req, res) => {});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
