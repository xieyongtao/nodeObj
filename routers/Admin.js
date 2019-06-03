var express = require("express");
var router = express.Router();
// 函数  只要调用立即执行函数内代码段
// 函数体  只是调用函数体，只会返回函数本身

var adminController = require("../controller/adminController");
var categoryController = require("../controller/categoryController");
var goodsController = require("../controller/goodsController");

router.get("/login",adminController.login);
router.post("/login",adminController.loginPost);
router.use(adminController.validate) //能通过后台验证是否登录
router.get('/',adminController.index);
router.get('/out', adminController.out);
// 分类功能

router.get('/category', categoryController.index)
router.get('/category/add',categoryController.add )
router.post('/category/add',categoryController.addPost )
router.get('/category/edit', categoryController.edit)
router.get('/category/del', categoryController.del)

// 商品功能
router.get("/goods",goodsController.index)
router.get("/goods/add",goodsController.add)
router.post("/goods/add",goodsController.addPost)
router.post("/goods/upload", goodsController.upload)
router.post("/goods/deleteImg", goodsController.deleteImg)
router.get("/goods/edit",goodsController.edit);
router.post("/goods/edit",goodsController.editPost);
router.get("/goods/del", goodsController.del);

module.exports = router;