(function(){
    angular.module('x1').controller("Logincontrollers",Logincontrollers);
    Logincontrollers.$inject=['$state','$window','MainService','$cookieStore'];
    function Logincontrollers($state,$window,MainService,$cookieStore) {
        var ctrl=this;
        ctrl.signup=function () {
            $state.go('Registeration');
        };
        ctrl.login=function () {
            var data ={
                username : ctrl.username,
                password : ctrl.password
            };
            console.log(data);
            MainService.loginsubmit(data).then(function(response){
                if(response.status==200){
                    $cookieStore.put("userDetails",response.data);
                    alert("Logged in!!!");
                    $state.go('Homepage');
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