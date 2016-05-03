(function (){
    'use strict';

    var app = angular.module('lean',[]);

    app.config(function () {
        console.log('--> Configuring lean angular todo app ...');
    });

    app.run(function () {
        console.log('Lean todo app started at ' + (new Date()).toLocaleTimeString());
    });
})();
