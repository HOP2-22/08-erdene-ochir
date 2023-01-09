const express = require("express");
const UserRouter = require("./routers/userRouter");
const URI =
  "mongodb+srv://erdeneochir:Erdene6207@cluster0.sfewaib.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(URI);

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB connected");
});

const app = express();

app.use(express.json());

const PORT = 3000;
app.use("/", UserRouter, (req, response) => {
  response.send({ text: "Hello, world!" });
});

app.listen(PORT || 3000, () => {
  console.log(`listening on port ${PORT}`);
});
const get = (req, res, next) => {};
