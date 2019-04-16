


const mongoose = require('mongoose');
const Schema = mongoose.Schema;





const vampireSchema = new mongoose.Schema({
name: {type: String, required: true},
hair_color: {type: String, default: "blonde"},
eye_color: {type: String},
dob:  {type: Date},
loves: [{type: String}],
location: {type: String},
gender: {type: String},
victims: {type: Number, min: 0}

});

const vampire = mongoose.model('vampire', vampireSchema);

module.exports = vampire;
