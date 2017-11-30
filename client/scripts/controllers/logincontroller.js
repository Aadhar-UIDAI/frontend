(function(){
    angular.module('x1').controller("Logincontrollers",Logincontrollers);
    Logincontrollers.$inject=['$window'];
    function Logincontrollers($window) {
        var ctrl=this;
        ctrl.success=function () {
            alert('Success');
        }
    }
})();