(function(){
    angular.module('x1').factory("MainService",MainService);
    MainService.$inject=['$http'];
    function MainService($http){
        var service={};
        service.loginsubmit=loginsubmit;
        return service;

        function loginsubmit(data){
            return $http.post('http://localhost:8080/login',data).then(successfunction,failurefunction);
        }
        function successfunction(data){
            console.log("Login API success");
            return data;
        }
        function failurefunction(err){
            console.log(err);
            return err;
        }
    }
})();