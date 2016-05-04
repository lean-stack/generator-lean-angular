(function() {
  'use strict';

  function LocalStorageStore(storageID, $q) {

    var todos = [];

    function _getFromLocalStorage() {
				return JSON.parse(localStorage.getItem(storageID) || '[]');
		}

		function _saveToLocalStorage(todos) {
				localStorage.setItem(storageID, JSON.stringify(todos));
		}

	  this.clearCompleted = function () {
			var deferred = $q.defer();

			var incompleteTodos = todos.filter(function (todo) {
				return !todo.completed;
	    });

			angular.copy(incompleteTodos, todos);

			_saveToLocalStorage(todos);
			deferred.resolve(todos);

			return deferred.promise;
		};

		this.delete = function (todo) {
			var deferred = $q.defer();

			todos.splice(todos.indexOf(todo), 1);

			_saveToLocalStorage(todos);
			deferred.resolve(todos);

			return deferred.promise;
		}

		this.get = function () {
				var deferred = $q.defer();

				angular.copy(_getFromLocalStorage(), todos);
				deferred.resolve(todos);

				return deferred.promise;
			},

		this.insert = function (todo) {
				var deferred = $q.defer();

				todos.push(todo);

				_saveToLocalStorage(todos);
				deferred.resolve(todos);

				return deferred.promise;
			},

		this.put = function (todo, index) {
				var deferred = $q.defer();

				todos[index] = todo;

				_saveToLocalStorage(todos);
				deferred.resolve(todos);

				return deferred.promise;
			}
  }

  angular.module('leanApp')
    .provider('store', function() {

      var storageId = 'todos';
      this.setStorageId = function(id) { storageId = id };

      this.$get = function($q) {
        return new LocalStorageStore(storageId, $q);
      }
    });

}());
