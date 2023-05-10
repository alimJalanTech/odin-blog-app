const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

const authRoute = require("./routes/auth");
const authUser = require("./routes/user");
const authPost = require("./routes/posts");
const authCat = require("./routes/categories");

dotenv.config();

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());

app.use("/images", express.static(path.join(__dirname, "/images")));

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("Connected to Mongoose"))
  .catch((error) => console.error(error));

/* Pending Image Upload Part*/
// const storage = multer.diskStorage({
//   destination: (req, file, callb) => {
//     callb(null, "images");
//   },
//   filename: (req, file, callb) => {
//     //callb(null, "file.png")
//     callb(null, req.body.name);
//   },
// });
// const upload = multer({ storage: storage });
// app.post("/upload", upload.single("file"), (req, res) => {
//   res.status(200).json("File has been uploaded");
// });

app.use("/auth", authRoute);
app.use("/user", authUser);
app.use("/post", authPost);
app.use("/cat", authCat);

app.listen("3001", () => {
  console.log("listening on port");
});
