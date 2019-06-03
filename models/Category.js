var mongoose = require("mongoose");

var CategorySchema = mongoose.Schema({
    name:String
})

// CategorySchema.method // 动态方法  把定义方法直接加入骨架Schema
// CategorySchema.statics  //静态方法   在骨架外定义方法，不属于骨架全局方法

CategorySchema.statics.getCategoryDataAndCount = function(limit,pageData,callback){
    var page = 0;
    if (pageData != undefined) {
        page = pageData;
    }
    var _this = this;
    _this.find({}).limit(limit).skip(page * limit).sort({ _id: -1 }).then(function (result) {
        _this.find().countDocuments().then(function (num) {
            callback(result,Math.ceil(num / limit));
        })
    })
}

module.exports = mongoose.model("Category" ,CategorySchema);