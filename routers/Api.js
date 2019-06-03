var express = require("express");
var router = express.Router();

var apiController = require("../controller/apiController");
var goodsApiController = require("../controller/goodsApiController");

// http://192.168.31.2:3000/api/goods/list
router.get('/', apiController.index)
router.get('/list', apiController.list)

// 商品功能
router.get("/goods", goodsApiController.index);
router.get("/goods/list", goodsApiController.list);

module.exports = router;