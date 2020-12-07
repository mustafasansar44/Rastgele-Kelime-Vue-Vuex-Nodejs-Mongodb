const mongoose = require('mongoose');
const { Schema } = mongoose;

const wordSchema = new Schema({
    english: String,
    turkish: String
})

Model = mongoose.model('word', wordSchema);
module.exports = Model