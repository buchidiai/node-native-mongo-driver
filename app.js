const mongoose = require("mongoose");

mongoose.connect(`mongodb://localhost:27017/Business`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const businessSchema = new mongoose.Schema({
  name: String,
  address: String,
  zipCode: Number,
  open: Boolean,
  socialMedia: Array,
  coordinates: {
    type: [Number],
    default: [0, 0]
  }
});

const Business = mongoose.model("Business", businessSchema);

const business = new Business({
  name: `Angie's Food Trunk`,
  address: `500 dallas dr, dallas, tx`,
  zipCode: 75501,
  open: true,
  socialMedia: ["angies_trunk"],
  coordinates: [40.73061, -73.935242]
});

business.save().then(() => console.log("saved"));
