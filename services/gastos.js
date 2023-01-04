const gastosModel = require("../models/gastos");
 
exports.createGatos = async (gasto) => {
  return await gastosModel.create(gasto);
}

exports.deleteGatos = async (id) => {
    return await gastosModel.findByIdAndDelete(id);
  };