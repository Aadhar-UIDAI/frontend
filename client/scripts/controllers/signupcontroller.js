(function(){
    angular.module('x1').controller("SignupControllers",SignupControllers);
    SignupControllers.$inject=['$state','$window','RegisterService'];
    function SignupControllers($state,$window,RegisterService) {
        var ctrl=this;
        ctrl.login=function () {
            $state.go('Loginpage')
        };
        ctrl.register=function () {
            var data ={
                name : ctrl.name,
                username : ctrl.username,
                password : ctrl.password
            };
            console.log(data);
            RegisterService.registerdata(data).then(function(response){
                if(response.status==200){
                    alert("Logged in!!!");
                }
                else if(response.status==402)
                {
                    alert("User does not exists");
                }
                else if(response.status==401)
                {
                    alert("Password is incorrect");
                }
            });
        };
    }
})();