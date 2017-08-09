angular
  .module("app")
  .factory("restservice", ['$http','$q', restservice]);

angular.rootContext = "http://163.172.181.95:8080/mesaforte";
//
function restservice($http,$q) {
  var beans = {};

  var factory = {

    get: function(beanUrl, params) {
      var config = {};
      config.params = params;
      var result = $http.get(beanUrl, config).then(function(data) {
        return data;
      }, function(error) {
        console.log("err0r", error);
        return $q.reject("Server response rejected");
      });
      return result;
    },
    put: function(beanUrl, params) {
      $http.defaults.headers.common['Authorization'] = 'Bearer ' + params.access_token;
      var result = $http.put(angular.rootContext + "/" + beanUrl, params).then(function(data) {
        return data;
      }, function(err) {
        console.log(err);
        return err;
      });
      return result;
    },
    login: function(beanUr, bean) {
      var result = $http.post(angular.rootContext + "/" + beanUr, bean).then(function(response) {
        return response;
      }, function() {
        console.log("status error", err);
        return status;
      });

      return result;
    },
    post: function(beanUrl, params) {
      $http.defaults.headers.common['Authorization'] = 'Bearer ' + params.access_token;
      var result = $http.post(angular.rootContext + "/" + beanUrl, params).then(function(response) {
        console.log(response);

        return response;
      }, function(err) {
        console.log("status", err);
        return status;
      });

      return result;
    }
  };
  return factory;
}