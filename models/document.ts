import mongoose from "mongoose";

const document = new mongoose.Schema({
    type: {
        required: true,
        type: String
    },
    number: {
        required: true,
        type: Number
    },
    country: {
        required: true,
        type: String
    },
    delivery: {
        required: true,
        type: Date
    }
    ,
    until: {
        required: true,
        type: Date
    },
    given_from: {
        required: true,
        type: String
    }
})

export default mongoose.model('Document', document);