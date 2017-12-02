(function(){
    angular.module('x1').factory("authService",authService);
    authService.$inject=['$http','$cookieStore'];
    function authService($http,$cookieStore){
        var service={};
        service.verifysession=verifysession;
        return service;

        function verifysession(){
            var details =$cookieStore.get("userDetails");
            return $http.post('http://localhost:8080/auth',details).then(successfunction,failurefunction);
        }
        function successfunction(data){
            return data;
        }
        function failurefunction(err){
            return err;
        }
    }
})();