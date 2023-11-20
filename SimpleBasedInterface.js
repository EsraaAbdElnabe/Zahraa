const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

// Middleware to parse JSON in the request body
app.use(bodyParser.json());

// GET endpoint
app.get("/api/greet", (req, res) => {
  console.log("enter get");
  res.json({ message: "Hello, welcome to the REST API! from GET" });
});

// POST endpoint
app.post("/api/greet", (req, res) => {
  const { name } = req.body;
  console.log(req.body);
  res.json({ message: `Hello, ${name}!` });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
