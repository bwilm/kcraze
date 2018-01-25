'use strict';

angular.module('kcraze.moltin',[] )
.factory('MoltinAuth',function($q) {
  var deferred = $q.defer();
  var moltin = new Moltin({publicId: '0xQL1ndUFLObV15x4vNgFU6dTMKwc8ofNgP7chn7M5'});
  moltin.Authenticate(function(){
    deferred.resolve(moltin);
  });

  return deferred.promise;

});
