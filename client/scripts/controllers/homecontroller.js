(function(){
    angular.module('x1').controller("Homecontrollers",Homecontrollers);
    Homecontrollers.$inject=[];
    function Homecontrollers() {
    var ctrl=this;
    ctrl.func=function(){
        console.log("working");
    }
    }
    })();