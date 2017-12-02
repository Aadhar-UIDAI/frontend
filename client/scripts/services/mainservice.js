(function(){
    angular.module('x1').factory("MainService",MainService);
    MainService.$inject=['$http'];
    function MainService($http){
        var service={};
        service.loginsubmit=loginsubmit;
        service.logout=logout;
        return service;

        function loginsubmit(data){
            return $http.post('http://localhost:8080/login',data).then(successfunction,failurefunction);
        }
        function logout(data){
            return $http.post('http://localhost:8080/logout',data).then(successfunction,failurefunction);
        }
        function successfunction(data){
            return data;
        }
        function failurefunction(err){
            return err;
        }
    }
})();