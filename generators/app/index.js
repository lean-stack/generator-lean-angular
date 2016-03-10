'use strict';

var generators = require('yeoman-generator');

module.exports = generators.Base.extend({

  constructor: function () {
    generators.Base.apply(this, arguments);
  },

  initializing: {},

  prompting: {},

  configuring: {},

  writing: {
      html: function () {
      this.fs.copyTpl(
        this.templatePath('index.html'),
        this.destinationPath('app/index.html')
      );
    }
  },

  conflict: {},

  install: {},

  end: {}
});
