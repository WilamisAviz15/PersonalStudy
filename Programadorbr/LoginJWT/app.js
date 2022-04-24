require("dotenv").config();
const express = require("express");
const app = express();
const userRouter = require("./routes/userRouter");
const adminRouter = require("./routes/adminRouter");
const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGO_URI,
  {
    useUnifiedTopology: true,
  },
  (err) => (err ? console.log(err) : console.log("Connected to MongoDB"))
);

app.use("/user", express.json(), userRouter);
app.use("/admin", express.json(), adminRouter);
app.listen(process.env.PORT, () => console.log("Server running"));
