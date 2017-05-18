/**
 * Created by gnu_d on 18.5.17.
 */

var express = require('express');
var router = express.Router();

var productRoutes = require('./products/product');
router.get('/', productRoutes.list);
router.post('/', productRoutes.create);
router.get('/:id', productRoutes.read);
router.put('/:id', productRoutes.update);
router.delete('/:id', productRoutes.delete);

module.exports = router;