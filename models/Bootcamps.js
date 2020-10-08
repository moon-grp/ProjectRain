const mongoose = require("mongoose");
const slugify = require("slugify");

const BootCampSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add a name."],
    unique: true,
    trim: true,
    maxlength: [50, "Name cannot be more than 50 chars"],
  },
  slug: String,
  description: {
    type: String,
    required: [true, "Please add a description."],
    unique: true,
    trim: true,
    maxlength: [500, "description cannot be more than 500 chars"],
  },
  website: {
    type: String,
    match: [
      /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/,
      "Please use a valid URL with Http or Https",
    ],
  },
  phone: {
    type: String,
    maxlength: [20, "max length is 20"],
  },
  email: {
    type: String,
    match: [
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
      "Please add a valid email",
    ],
  },
  address: {
    type: String,
    required: [true, "please add an address"],
  },
  /*  location:{
        type:{
            type:String,
            enum:['Point'],
           // required:true
        },
        coordinates:{
            type:Number,
            required:true,
            index:'2dsphere'
        },
        formattedaddress:String,
        street:String,
        city:String,
        state:String,
        zipcode:String,
        country:String

    }, */
  carrers: {
    type: [String],
    required: true,
    enum: ["web dev", "pythion", "fashion", "other"],
  },
  averageRating: {
    type: Number,
    min: [1, "Rating must be at least 1"],
    max: [10, "Rating must be at most 10"],
  },
  averageCost: Number,
  photo: {
    type: String,
    default: "no-photo.jpg",
  },
  housing: {
    type: Boolean,
    default: false,
  },
  jobAssistance: {
    type: Boolean,
    default: false,
  },
  jobGuarantee: {
    type: Boolean,
    default: false,
  },
  acceptGi: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

BootCampSchema.pre("save", function () {
  this.slug = slugify(this.name, { lower: true });
  next();
});

module.exports = mongoose.model("Bootcamp", BootCampSchema);
