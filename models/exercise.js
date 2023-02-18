// const mongoose = require('mongoose');

// const exerciseSchema = new mongoose.Schema({
//     username: {
//         type: String,
//     },
//     description: {
//         type: String,
//     },
//     duration: {
//         type: Number,
//     },
//     date: {
//         type: String
//     },
//     userId: {
//         type: String
//     }
// } , {
//     versionKey: false
// });

// module.exports = mongoose.model('Exercise', exerciseSchema);

const mongoose = require('mongoose');

const exerciseSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Exercise', exerciseSchema);