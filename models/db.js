db = require('mongoose')


const productSchema = new Schema({
    product_name: String,
    product_price: String,
    product_count_on_stock: Number

    }
)

module.exports = productSchema

