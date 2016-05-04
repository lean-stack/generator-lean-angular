(function (){
    'use strict';

    var app = angular.module('leanApp',[]);

    app.config(function (storeProvider) {
        console.log('--> Configuring lean angular todo app ...');
        storeProvider.setStorageId('cs-todos');
    });

    app.run(function (store) {
        console.log('Lean todo app started at ' + (new Date()).toLocaleTimeString());
        store.get().then(function(todos){
          console.log('Current count of todos: ' + todos.length);
        });
    });
})();
