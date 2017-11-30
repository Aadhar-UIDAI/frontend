(function(){
    angular.module('x1').factory("RegisterService",RegisterService);
    RegisterService.$inject=['$http'];
    function RegisterService($http){
        var service={};
        service.registerdata=registerdata;
        return service;

        function registerdata(data){
            return $http.post('http://localhost:8080/register',data).then(successfunction,failurefunction);
        }
        function successfunction(data){
            console.log("Registeration API success");
            return data;
        }
        function failurefunction(err){
            console.log(err);
            return err;
        }
    }
})();