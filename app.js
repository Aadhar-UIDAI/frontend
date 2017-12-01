(function(){
    var express= require('express');
    var path = require('path');
    var app= express();
    app.use('/',express.static(__dirname+'/client'));
    app.listen(3000);
    console.log("Hosted in Port-- 3000");
})();
