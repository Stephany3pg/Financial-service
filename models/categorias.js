var mongoose = require("mongoose");
var Schema = mongoose.Schema;
 
var categoriaSchema = new Schema({
  name: String,
});
 
module.exports = mongoose.model("categorias", categoriaSchema);