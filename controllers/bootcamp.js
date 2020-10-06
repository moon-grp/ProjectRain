const Bootcamp = require("../models/Bootcamps");

exports.getbootcamps = (req, res, next) => {
  res.status(200).json({ success: true, msg: "show all boot camps yup yup" });
};

exports.createbootcamp = (req, res, next) => {
  console.log(req.body);
  res.status(200).json({
    success: true,
    msg: `show a boot camp ${req.params.id} `,
    hello: req.hello,
  });
};
