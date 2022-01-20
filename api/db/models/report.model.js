const mongoose = require('mongoose');

const ReportSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },

    month:{
        type:String,
        required:true,
    },
    subscriptions:{
        type: Number,
        required:true
    }
    
})

const Report = mongoose.model('Report', ReportSchema);

module.exports = { Report }