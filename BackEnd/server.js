const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const userRouter = require("./src/routes/users");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8085;
const Url = process.env.MongoURL;
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

app.use("/api/users", userRouter);

mongoose
  .connect(Url, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    dbName: "MERNFullStack",
  })
  .then(() => {
    console.log("MongoDb Connected");
    app.listen(PORT, () => {
      console.log(`Server is Started at http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB connection error:", err.message);
  });

