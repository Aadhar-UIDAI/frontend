(function(){
    angular.module('x1').controller("Homecontrollers",Homecontrollers);
    Homecontrollers.$inject=['$state','authService','$window','$cookieStore','MainService'];
    function Homecontrollers($state,authService,$window,$cookieStore,MainService) {
        var ctrl=this;
        ctrl.travloginpage=function(){
                    $state.go('Loginpage');
        }
        ;
        ctrl.travpage1=function(){
            authService.verifysession().then(function (response) {
                if(response.status==200)
                {
                    $state.go('Page1');
                }
                else if(response.status==404)
                {
                    alert("Session ended , Login again");
                    $state.go('Loginpage');
                }
                else if(response.status==403)
                {
                    alert("Error in Token try login again");
                    $state.go('Loginpage');
                }
                else
                {
                    alert("Internal Error login again");
                    $state.go('Loginpage');
                }
            });
        };

        ctrl.travpage2=function(){
            authService.verifysession().then(function (response) {
                if(response.status==200)
                {
                    $state.go('Page2');
                }
                else if(response.status==404)
                {
                    alert("Session ended , Login again");
                    $state.go('Loginpage');
                }
                else if(response.status==403)
                {
                    alert("Error in Token try login again");
                    $state.go('Loginpage');
                }
                else
                {
                    alert("Internal Error login again");
                    $state.go('Loginpage');
                }
            });
        };
        ctrl.logout=function () {
            var data = $cookieStore.get("userDetails");
            if(!data.token)
            {
                alert("You have already logged out");
                $state.go('Homepage');
            }
            else
            {
                var tokenData={
                    token:data.token
                };
                MainService.logout(tokenData).then(function (response) {
                    if(response.status==200)
                    {
                        $cookieStore.remove("userDetails");
                        alert('Logged out');
                        $state.go('Homepage');
                    }
                    else
                    {
                        alert("Problem on Our side!!");
                    }
                })
            }
        }

        ctrl.isUserLoggedIn=function () {
            var data=$cookieStore.get("userDetails");
            if(data)
                return true;
            else
                return false;
        };
    }
})();