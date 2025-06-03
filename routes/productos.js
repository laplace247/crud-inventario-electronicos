const express = require('express');
const router = express.Router();
const productosController = require('../controllers/productosController');
// Rutas para manejar productos
// GET, POST, PUT, DELETE para productos
router.get('/productos', productosController.listarProductos);
router.post('/productos', productosController.crearProducto);
router.get('/productos/:id', productosController.obtenerProductoPorId);
router.put('/productos/:id', productosController.actualizarProducto);
router.delete('/productos/:id', productosController.eliminarProducto);
// Exportar el router para usarlo en app.js
module.exports = router;