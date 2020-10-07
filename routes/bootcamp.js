const express = require("express");
const Bootcamp = require("../models/Bootcamps");

//const { getbootcamps, createbootcamp } = require("../controllers/bootcamp");

/*router.get("/", (req, res) => {
  // res.send("hello from express");
  // res.json({name: "olumide"})
  res.status(200).json({ success: true, msg: "show all boot camps" });
});  */

const router = express.Router();

//router.route("/").get(getbootcamps).post(createbootcamp)
//router.route("/:id").post(createbootcamp)

router.get("/getbootcamps",async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.find();
    res.status(200).json({success:true,data:bootcamp})
  } catch (error) {
    res.status(400).json({succes:false})
  }
});

router.post("/createbootcamp", async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.create(req.body);

    res.status(201).json({
      success: true,
      data: bootcamp,
    });
  } catch (error) {
    res.status(400).json({success:false})
  }
});




module.exports = router;
