const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderItemSchema = new Schema({
  order_id: {
    type: Schema.Types.ObjectId,
    ref: 'Order',
    required: true
  },
  product_id: {
    type: Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    default: function() {
      return this.model('Product').findById(this.product_id).then(product => product.price);
    }
  }
});

module.exports = mongoose.model('OrderItem', OrderItemSchema);
