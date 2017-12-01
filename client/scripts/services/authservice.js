(function(){
    angular.module('x1').factory("authService",authService);
    authService.$inject=['$http','$cookieStore'];
    function authService($http,$cookieStore){
        var service={};
        service.verifysession=verifysession;
        return service;

        function verifysession(){
            var details =$cookieStore.get("userDetails");
            console.log(details);
            return $http.post('http://localhost:8080/auth',details).then(successfunction,failurefunction);
        }
        function successfunction(data){
            console.log("auth API success");
            return data;
        }
        function failurefunction(err){
            console.log(err);
            return err;
        }
    }
})();