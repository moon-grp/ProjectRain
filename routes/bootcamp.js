const express = require("express");
const Bootcamp = require("../models/Bootcamps");

const { getbootcamps, createbootcamp } = require("../controllers/bootcamp");

/*router.get("/", (req, res) => {
  // res.send("hello from express");
  // res.json({name: "olumide"})
  res.status(200).json({ success: true, msg: "show all boot camps" });
});  */

const router = express.Router();

//router.route("/").get(getbootcamps).post(createbootcamp)
//router.route("/:id").post(createbootcamp)

router.get("/getallbootcamps", (req, res, next) => {
  res.status(200).json({ success: true, msg: "show all boot camps yup yup" });
});

router.post("/createbootcamp", async (req, res, next) => {
  const bootcamp = await Bootcamp.create(req.body);

  res.status(201).json({
    success: true,
    data: bootcamp,
  });
});

module.exports = router;
