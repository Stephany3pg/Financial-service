var express = require('express');
var router = express.Router();


router.get(`/app/categorias`, function (req, res) {
	res.status(200).json({msg: `Get Categorias`});
});

router.post(`/app/gastos/registrar`, function (req, res) {
	res.status(200).json({msg: `Post Registrar`});
});

router.delete(`/app/gastos/eliminar`, function (req, res) {
	res.status(200).json({msg: `Delete gastos`});
});

module.exports = router;
