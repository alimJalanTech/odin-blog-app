const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const authUser = require("./routes/user");
const authPost = require("./routes/posts");

dotenv.config();
app.use(express.json());
mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("Connected to Mongoose"))
  .catch((error) => console.error(error));

app.use("/auth", authRoute);
app.use("/user", authUser);
app.use("/post", authPost);

app.listen("3001", () => {
  console.log("listening on port");
});
