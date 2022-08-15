const express = require("express");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send(
    `<a href="https://github.com/login/oauth/authorize?client_id=d32882565b0ad0281291">Login via GitHub</a>`
  );
});

app.get("/auth/github", (req, res) => {
  res.send("Login is Successful");
});

app.listen(8080, () => {
  console.log("Service listening on port 5000");
});
