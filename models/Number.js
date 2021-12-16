const mongoose = require('mongoose');

const NumberSchema = new mongoose.Schema({
    numbers: {
        type: Array,
        required: true
    }
})