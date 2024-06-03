const mongoose = require("mongoose");
const productShcema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter product name"],
        trim: true,

    },
    description: {
        type: String,
        required: [true, "Please enter product description"],

    },
    price: {
        type: Number,
        required: [true, "Please enter product price"],
        maxLength: [8, "price can not exceed 8 figures"],

    },
    ratings: {
        type: Number,
        default: 0,
    },
    images: [
        {
            public_id: {
                type: String,
                required: true,
            },
            url: {
                type: String,
                required: true,
            }
        }
    ],
    category: {
        type: String,
        required: [true, "Please enter product category"],

    },
    stock: {
        type: Number,
        required: [true, "Please enter product stock"],
        maxLength: [4, "Stock can not exceed 4 figures"],
        default: 1,
    },
    numOfReviews: {
        type: Number,
        default: 0,
    }, 
    reviews: [
        {
            user: {
                type: mongoose.Schema.ObjectId,
                ref: "User",
                required: true,

            },
            name: {
                type: String,
                required: true,
            },
            rating: {
                type: Number,
                required: true,
            },
            comment: {
                type: String,
                required: true,
            },
        }
    ],
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,

    },
    createdAt: {
        type: Date,
        default: Date.now(),
    }

});

const Product = mongoose.model("Product", productShcema);
module.exports = Product;