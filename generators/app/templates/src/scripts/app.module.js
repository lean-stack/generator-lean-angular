(function (){
    'use strict';
    
    var app = angular.module('lean',[]);
    
    app.configure(function () {
        console.log('--> Configuring lean angular app ...');
    });
    
    app.run(function () {
        console.log('Lean app started.')
    });
})();