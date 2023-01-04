var categoriasService = require("../services/categorias");

exports.getCategoria = async (req, res) => {
    try {
      const categorias = await categoriasService.getCategorias();
      res.json({ data: categorias, status: "success" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };