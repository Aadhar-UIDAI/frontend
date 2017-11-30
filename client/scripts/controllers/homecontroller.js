(function(){
    angular.module('x1').controller("Homecontrollers",Homecontrollers);
    Homecontrollers.$inject=['$state'];
    function Homecontrollers($state) {
    var ctrl=this;
    ctrl.travloginpage=function(){
        $state.go('Loginpage');
        console.log("Traversal success");
    }
    }
    })();