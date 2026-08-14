const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes");

const { PORT = 3001 } = process.env;
const app = express();

mongoose
  .connect("mongodb://127.0.0.1:27017/wtwr_db")
  .then(() => console.log("Connected to the database"))
  .catch((err) => console.error(err));

app.use(express.json());

app.use((req, res, next) => {
  req.user = {
    _id: "6a7f4c66f4fe8dde2da0a062",
  };

  next();
});

app.use("/", router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
