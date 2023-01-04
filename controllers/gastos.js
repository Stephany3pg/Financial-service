var gastosService = require("../services/gastos");
 
exports.createGasto = async (req, res) => {
  try {
    const gasto = await gastosService.createGatos(req.body);
    res.json({ data: gasto, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteGasto= async (req, res) => {
  try {
    const gasto = await gastosService.deleteGatos(req.params.id);
    res.json({ data: gasto, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};