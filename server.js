const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.text());
app.listen(port, () =>
  console.log(`Express server running at http://localhost:${port}`)
);
