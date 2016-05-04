(function (){
    'use strict';

    var app = angular.module('leanApp',[]);

    app.config(function () {
        console.log('--> Configuring lean angular app ...');
    });

    app.run(function () {
        console.log('Lean app started at ' + (new Date()).toLocaleTimeString());
    });
})();
