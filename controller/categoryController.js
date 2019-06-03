var Controller = require("./controller");

var Category = require("../models/Category");

class categoryController extends Controller{
    constructor(){
        super()
        // this对象指向问题，修改this指向类。原本this指向路由
        // this.index = this.index.bind(this);
    }
    // 分类首页
    index(req,res){
        // 分页功能
        console.log(req.query.page);

        Category.getCategoryDataAndCount(3, req.query.page,function(result,num){
            req.session.result = result;
            req.session.pageCount = num;
            res.render("admin/category", req.session);
        })


    }

    add(req,res){
        res.render("admin/categoryAdd",req.session);
    }

    addPost(req,res){
        Category.insertMany(req.body,function(err,result){
            if(err) {
                res.render("admin/error", { err: "数据操作失败", url: "/admin/category", date: 3000 })
                return;
            };    
            res.redirect('/admin/category');
        })
    }

    edit(req,res){
        res.send("后台分类功能修改")
    }

    del(req,res){
        var id = req.query.id;
        Category.deleteOne({"_id":id},function(err){
            if(err){
                res.render("admin/error", { err: "数据操作失败", url: "/admin/category", date: 3000 })
            }else{
                res.redirect('/admin/category');
            }
        })
    }
}

module.exports = new categoryController;