(function() {
  'use strict';

  function TodoController(store) {
    var vm = this;

    vm.todoTxt = '';

    store.get().then(function(todos) {
      vm.todos = todos;
    });

    vm.create = function(){
      var todo = {
        text: vm.todoTxt.trim(),
        done: false
      };
      if(!todo.text) return;

      store.insert(todo).then(function(todos){
        vm.todoTxt = '';
      });
    }
  }

  angular.module('leanApp')
    .controller('todoController', TodoController)
}());
