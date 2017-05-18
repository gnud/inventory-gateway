/**
 * Created by gnu_d on 18.5.17.
 */

/**
 * Created by damjan on 17.5.17.
 */
var mongoose = require("mongoose");

var productSchema = mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        index: true,
        required: true,
        auto: true,
    },
    "data" : {
        "SKU" : String,
        "name" : String,
        "description" : String,
        "brand" : String
    },
    "inventory" : {
        "buy_price" : Number,
        "sell_price" : Number,
        "stock" : Number
    },
    "attributes" : {
        "packaging" : String
    }
});

var Product = mongoose.model('Product', productSchema);

module.exports = {
    Product: Product
}