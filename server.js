const express = require("express");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 8080;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(200).send({
    message:
      "Welcome to node Js application, We are going to implement DevSecOps Practice on Azure Devops !!!!",
  });
});

app.listen(PORT, () => {
  console.log("======================================================");
  console.log("Express app successfully started on port " + PORT);
  console.log("======================================================");
});
