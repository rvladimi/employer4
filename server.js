const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

app.post("/", function (request, response) {
  if (!request.body) return response.sendStatus(400);
  const data = JSON.stringify(request.body);
  console.log(data);
});

app.listen(3000);
