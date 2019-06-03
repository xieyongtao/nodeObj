var controller = require("./controller");

class apiController extends controller{
        constructor(){
            super();
        }

        index(req,res){
            res.send("API板块")
        }

        list(req,res){
            res.send("API列表")
        }


}

module.exports = new apiController;