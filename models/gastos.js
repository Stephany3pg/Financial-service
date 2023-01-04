var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var gastosSchema = new Schema({
  name: String,
  categoria: String,
  valor: Number,
});
 
module.exports = mongoose.model("gastos", gastosSchema);