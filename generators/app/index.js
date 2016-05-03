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
    bowerJson: function() {
      var bowerJson = {
        name: 'lean-ng',
        private: true,
        dependencies: {}
      };
      var bowerRc = {
        directory: 'bower_components'
      };
      this.fs.writeJSON('bower.json', bowerJson);
      this.fs.writeJSON('.bowerrc', bowerRc);
    },
    packageJson: function () {
      this.fs.copy(
        this.templatePath('_package.json'),
        this.destinationPath('package.json')
      );
    },
    gulpfile: function () {
      this.fs.copy(
        this.templatePath('gulpfile.js'),
        this.destinationPath('gulpfile.js')
      );
    },
    html: function () {
      this.fs.copyTpl(
        this.templatePath('src/index.html'),
        this.destinationPath('src/index.html')
      );
    },
    styles: function () {
      this.fs.copy(
        this.templatePath('src/styles/**/*'),
        this.destinationPath('src/styles')
      )
    },
    scripts: function () {
      this.fs.copy(
        this.templatePath('src/scripts/**/*'),
        this.destinationPath('src/scripts')
      )
    },
    projectAssets: function () {
      this.fs.copy(
        [this.templatePath('LICENSE'), this.templatePath('README.md')],
        this.destinationPath()
      );
    }
  },

  conflict: {},

  install: function () {
    this.bowerInstall(['angular'], { 'save': true });
    this.npmInstall();
  },

  end: {}
});
