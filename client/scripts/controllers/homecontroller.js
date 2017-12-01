(function(){
    angular.module('x1').controller("Homecontrollers",Homecontrollers);
    Homecontrollers.$inject=['$state','authService','$window'];
    function Homecontrollers($state,authService,$window) {
    var ctrl=this;
    ctrl.travloginpage=function(){
        authService.verifysession().then(function (response) {
          if(response.status==200)
          {
              console.log("authenticated successfully");
          }
          else if(response.status==404)
          {
              console.log("Token expired");
              alert("Session ended , Login again");
              $state.go('Loginpage');
          }
          else if(response.status==403)
          {
              console.log("Error in Token try login again");
              alert("Error in Token try login again");
              $state.go('Loginpage');
          }
          else
          {
              console.log("User not found");
              alert("User not found");
              $state.go('Loginpage');
          }
        });
        $state.go('Loginpage');
        console.log("Traversal success");
    }
    }
    })();