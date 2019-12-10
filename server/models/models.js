const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/orangytruck', {useNewUrlParser: true}, (errs => console.log(errs)));

const TruckSchema = new mongoose.Schema({
    title: {type: String, required: true, minlength: 4},
    price: {type: String, required: true},
    date:   {type: Date, required: true},
    url: String
}, { timestamps: true });

module.exports = mongoose.model('truck', TruckSchema);