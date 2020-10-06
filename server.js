const express = require("express");
const dotenv = require("dotenv");
const bootcamp = require("./routes/bootcamp");
const logger = require("./middleware/logger");
const morgan = require("morgan");
const connectDB = require("./config/db");

dotenv.config({ path: "./config/config.env" });

connectDB();

const app = express();
app.use(express.json())

//app.use(logger);

if (process.env.NODE_ENV == "development") {
  app.use(morgan("dev"));
}

app.use("/api/v1", bootcamp);



/*app.get("/api/v1/bootcamps", (req, res) => {
  // res.send("hello from express");
  // res.json({name: "olumide"})
  res.status(200).json({ success: true, msg: "show all boot camps" });
}); */

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log("App listening on port " + PORT);
});

process.on("unhandledRejection", (err, promise) => {
  console.log(`error:${err.message}`);
  server.close(() => {
    process.exit(1);
  });
});
