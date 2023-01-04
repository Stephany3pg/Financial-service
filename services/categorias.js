var categoriasModel = require("../models/categorias");
 
exports.createCategoria = async (categoria) => {
    return await categoriasModel.create(categoria);
}

exports.getCategorias = async () => {
  return await categoriasModel.find();
};
